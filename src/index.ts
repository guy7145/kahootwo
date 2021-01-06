import express from 'express';
import {createServer} from 'http';
import {Server as SocketioServer} from 'socket.io';
import cors from 'cors';
import {Game} from "./game/game";
import {Player} from "./game/player";


const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
const http = createServer(app);
const io = new SocketioServer(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const GAME_SECRET = 'secret';
const GAME_ID = '123123';
const games = new Map() as Map<string, Game>;
games.set(GAME_ID, new Game(GAME_ID));


function verifyNickname(gameId: string, nickname: string) {
    if (!nickname) {
        return false;
    }

    const game = games.get(gameId);
    return game && !game.isNicknameTaken(nickname);
}

app.get('/verify-room', (req, res) => {
    const { gameId } = req.query as { gameId: string };
    res.send(!!games.get(gameId));
});
app.get('/verify-name', (req, res) => {
    const { gameId, nickname } = req.query as { gameId: string, nickname: string };
    res.send(verifyNickname(gameId, nickname));
});
app.get('/verify-host-secret', (req, res) => {
    const { secret } = req.query as { secret: string };
    res.send(secret === GAME_SECRET ? GAME_ID : false);
});

app.use(express.static('public'));

setInterval(() => { io.emit('is-alive'); }, 2000);

io.on('connection', (socket) => {
    socket.on('login', (msg: any) => {
        const { gameId, nickname } = JSON.parse(msg) as { gameId: string, nickname: string };
        const game = games.get(gameId);
        if (!game || game.isNicknameTaken(nickname)) {
            socket.emit('login', false);
        } else {
            game.addPlayer(new Player(socket, nickname, game));
        }
    });

    socket.on('host-login', (msg: any) => {
        const { gameId, secret } = JSON.parse(msg) as { gameId: string, secret: string };
        const game = games.get(gameId);
        if (!game || GAME_SECRET !== secret) {
            socket.emit('login', false);
        } else {
            // game.addHost(new Host(socket, game));
        }
    });
});

http.listen(port, () => {
    console.log('listening on *:' + port);
});
