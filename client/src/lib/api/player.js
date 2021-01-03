import { io } from 'socket.io-client';
import {conf} from '../../config';


export default class Player {
    constructor(gameId, nickname) {
        this.gameId = gameId;
        this.nickname = nickname;

        this.socket = io(conf.server.host, {autoConnect: true});
        this.signSocket();
    }

    signSocket() {
        this.socket.on('connect', () => this.login());
        this.socket.on('disconnect', () => this.socket.open());
        this.socket.on('playerlist', console.log);
        this.socket.on('isalive', () => this.sendIsAlive());
        this.socket.on('question', console.log);
        this.socket.on('endgame', console.log);
        this.socket.on('chat', console.log);
    }

    sendIsAlive() {
        this.socket.emit('isalive', 'still alive!')
    }

    login() {
        this.socket.emit('login', JSON.stringify({
            name: this.nickname,
            gameId: this.gameId,
        }))
    }
}
