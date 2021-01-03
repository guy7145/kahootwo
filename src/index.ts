import express from 'express';
import { createServer } from 'http';
import { Server as SocketioServer } from 'socket.io';
import { Game } from './models/game';
import { GameState } from './models/GameState';
import { Player, PlayerStatus } from './models/Player'
import cors from 'cors';

const port = process.env.PORT || 5000;

const chat: string[] = [];
const game: Game = {
    state: GameState.WaitingForPlayers,
    players: [],
    currentQuestion: 0,
    questions: [
        { question: "Who am I?", answers: ["Crash", "Monster", "Guy Danielli", "Ido ben amihai"], correctAnswer: "Crash", responded: [], startTime: 0 },
        { question: "Why do you do?", answers: ["Cuz", "We", "Are", "Ido ben amihai"], correctAnswer: "Crash", responded: [], startTime: 0 },
        { question: "Who am I?", answers: ["Crash", "Monster", "Guy Danielli", "Ido ben amihai"], correctAnswer: "Crash", responded: [], startTime: 0 },
    ]
};

const app = express();
app.use(cors());

const http = createServer(app);
const io = new SocketioServer(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.get('/verify-room', (req, res) => {
    const { room } = req.query as { room: string };
    res.send(room === '123');
});

app.get('/verify-name', (req, res) => {
    const { name } = req.query as { name: string };
    if (!name) res.send(false);
    else res.send(!game.players.map(x => x.name).includes(name));
});

app.use(express.static('public'));

setInterval(() => { io.emit('isalive'); }, 2000);

io.on('connection', (socket) => {
    let lastIsAlive = Date.now();
    let player: Player = { name: '', isReady: false, status: PlayerStatus.Offline };
    console.log('new socket connection');

    setInterval(() => {
        player.status = Date.now() - lastIsAlive > 5000 ? PlayerStatus.Offline : PlayerStatus.Online;
    }, 5000);

    socket.on('isalive', (msg: any) => { // isalive connection heartbeat
        player.status = PlayerStatus.Online;
        lastIsAlive = Date.now()
    });

    socket.on('login', (msg: any) => { // init socket
        const obj = JSON.parse(msg);
        player = { name: obj.name, isReady: game.state !== GameState.WaitingForPlayers, score: 0, status: PlayerStatus.Online };
        game.players.push(player);
        io.emit('playerlist', JSON.stringify(game.players));
    });

    socket.on('ready', (msg: any) => { // player says they're ready to start
        player.isReady = msg === 'true';
        io.emit('playerlist', JSON.stringify(game.players));
    });

    let intervalId;
    let timeoutId;

    socket.on('startgame', (msg: any) => { // player requests to start game
        if (game.players.find(x => !x.isReady)) return;
        game.state = GameState.Playing;
        game.currentQuestion = 0;
        game.questions[0].startTime = Date.now();
        io.emit('question', game.questions[0]);
    });

    socket.on('answer', (msg: any) => { // player submits an answer
        game.questions[game.currentQuestion].responded.push({ player, answer: msg });
        io.emit('question', game.questions[game.currentQuestion]);
    });

    socket.on('nextquestion', (msg: any) => { // player requests to continue
        game.currentQuestion++;
        if (game.questions.length < game.currentQuestion) {
            game.questions[game.currentQuestion].startTime = Date.now();
            io.emit('question', game.questions[game.currentQuestion]);
        } else {
            io.emit('endgame', game.players);
        }
    });

    socket.on('message', (msg: any) => { chat.push(msg); io.emit('chat', chat) }); // chat

    socket.on('disconnect', () => {
        player.status = PlayerStatus.Offline;
        console.log('user disconnected');
    });
});

http.listen(port, () => {
    console.log('listening on *:' + port);
});
