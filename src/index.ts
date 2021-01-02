import express from 'express';
import { createServer } from 'http';
import { Server as SocketioServer } from 'socket.io';
import Game from './game';
import { GameState } from './models/GameState';

const port = process.env.PORT || 5000;

const app = express();
const http = createServer(app);
const io = new SocketioServer(http);
const game = new Game();
const chat: string[] = [];

app.get('/', (req, res) => {
    res.send('hello world');
})

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('login', (msg: any) => {
        const obj = JSON.parse(msg);
        if (obj.room !== 123) socket.close();

        if (game.players.map(p => p.name).includes(obj.name)) {
            socket.emit('error', `Name ${obj.name} is taken. Maybe try another name? :).`);
            socket.close();
        }

        game.playerJoin({ isReady: game.state !== GameState.WaitingForPlayers, name: obj.name, score: 0 })
        io.emit('playerlist', game.players.map(x => x.name));
    });

    socket.on('ready', (msg:any) => {

    })

    socket.on('message', (msg: any) => { chat.push(msg); io.emit('chat', chat) });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(port, () => {
    console.log('listening on *:' + port);
});