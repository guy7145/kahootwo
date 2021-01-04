import GameClient from "./game-client";
import {SOCKET_ACTIONS} from "./consts";


export default class Player extends GameClient {
    constructor(gameId, nickname) {
        super(gameId);
        this.nickname = nickname;
    }

    signSocket() {
        this.socket.on(SOCKET_ACTIONS.CONNECT, () => this.login());
        this.socket.on(SOCKET_ACTIONS.PLAYERS_LIST, console.log);
        this.socket.on(SOCKET_ACTIONS.QUESTION, console.log);
        this.socket.on(SOCKET_ACTIONS.END_GAME, console.log);
        this.socket.on(SOCKET_ACTIONS.CHAT, console.log);
    }

    login() {
        this.socket.emit(SOCKET_ACTIONS.LOGIN, JSON.stringify({
            name: this.nickname,
            gameId: this.gameId,
        }))
    }
}
