import {Socket} from "socket.io";
import {Game} from "./game";

const PLAYER_MAX_QUIET_TIME = 2 * 1000;
const PLAYER_TIME_TO_DEATH = 60 * 1000;

export class Player {
    private isAliveInterval: any;
    nickname: string;
    game: Game;

    lastIsAlive: number;
    state: 'online' | 'offline';

    socket: Socket;

    constructor(socket: Socket, nickname: string, game: Game) {
        this.socket = socket;
        this.nickname = nickname;
        this.game = game;

        this.lastIsAlive = Date.now();
        this.state = 'online';
        this.playerBirth();
    }

    playerBirth() {
        this.isAliveInterval = setInterval(() => {
            const quietTime = Date.now() - this.lastIsAlive;
            if (quietTime > PLAYER_TIME_TO_DEATH) {
                this.playerDeath();
            } else if (quietTime > PLAYER_MAX_QUIET_TIME)
                this.socket.emit('isalive');
            },
            PLAYER_MAX_QUIET_TIME,
        );
    }

    playerDeath() {
        clearInterval(this.isAliveInterval);
        this.socket.disconnect();
    }

    notification(msg: string) {
        this.socket.emit('chat', msg);
    }
}
