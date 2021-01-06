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
                this.socket.emit('is-alive');
            },
            PLAYER_MAX_QUIET_TIME,
        );
    }

    playerDeath() {
        clearInterval(this.isAliveInterval);
        this.socket.disconnect();
    }

    notification(msg: string, duration?: number) {
        const notification = duration ? {msg, duration} : {msg};
        this.socket.emit('notification', JSON.stringify(notification));
    }

    glitchingOn() {
        this.socket.emit('glitch', 'on')
    }

    glitchingOff() {
        this.socket.emit('glitch', 'off')
    }
}
