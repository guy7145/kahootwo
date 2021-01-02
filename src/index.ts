import express from 'express';
import { createServer } from 'http';
import { Server as SocketioServer } from 'socket.io';
import { Game } from './models/game';
import { GameState } from './models/GameState';
import { Player } from './models/Player'
import cors from 'cors';
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
const http = createServer(app);
const io = new SocketioServer(http);
const game: Game = {
    state: GameState.WaitingForPlayers,
    players: [],
    currentQuestion: 0,
    questions: [
        { question: "Who am I?", answers: ["Crash", "Monster", "Guy Danielli", "Ido ben amihai"], correctAnswer: "Crash", responded: 0 },
        { question: "Why do you do?", answers: ["Cuz", "We", "Are", "Ido ben amihai"], correctAnswer: "Crash", responded: 0 },
        { question: "Who am I?", answers: ["Crash", "Monster", "Guy Danielli", "Ido ben amihai"], correctAnswer: "Crash", responded: 0 },
    ]
};
const chat: string[] = [];

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/verifyroom', (req, res) => {
    const { room } = req.query as { room: string };
    res.send(room === '123');
});

app.get('/verifyname', (req, res) => {
    const { name } = req.query as { name: string };
    if (!name) res.send(false);
    else res.send(!game.players.map(x => x.name).includes(name));
});

io.on('connection', (socket) => {
    let player: Player = { name: '', isReady: false };
    console.log('a user connected');

    socket.on('login', (msg: any) => {
        const obj = JSON.parse(msg);
        player = { name: obj.name, isReady: game.state !== GameState.WaitingForPlayers, score: 0 };
        game.players.push({ isReady: game.state !== GameState.WaitingForPlayers, name: obj.name, score: 0 });
        io.emit('playerlist', JSON.stringify(game.players));
    });

    socket.on('ready', (msg: any) => {
        player.isReady = JSON.parse(msg).ready;
        io.emit('playerlist', JSON.stringify(game.players));
    });

    socket.on('startgame', (msg: any) => {
        if (game.players.find(x => !x.isReady)) return;
        game.state = GameState.Playing;
        io.emit('question', game.questions[0]);
    });

    socket.on('question', (msg: any) => {

        io.emit('playerlist', JSON.stringify(game.players));
    });

    socket.on('message', (msg: any) => { chat.push(msg); io.emit('chat', chat) });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(port, () => {
    console.log('listening on *:' + port);
});