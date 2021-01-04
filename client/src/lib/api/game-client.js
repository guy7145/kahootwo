import { io } from 'socket.io-client';
import {conf} from '../../config';
import {SOCKET_ACTIONS} from "./consts";


export default class GameClient {
    constructor(gameId) {
        this.gameId = gameId;
        this.socket = io(conf.server.host, {autoConnect: true});
        this.signSocket();
        this.socket.on(SOCKET_ACTIONS.IS_ALIVE, () => this.sendIsAlive());
        this.socket.on(SOCKET_ACTIONS.DISCONNECT, () => {
            this.socket.open();
            this.sendIsAlive();
        });
    }

    signSocket() {
        throw new Error('not implemented')
    }

    sendIsAlive() {
        this.socket.emit(SOCKET_ACTIONS.IS_ALIVE, 'still alive!')
    }
}