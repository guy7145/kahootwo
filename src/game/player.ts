import {Socket} from "socket.io";
import {Game} from "./game";
import Participant from "./participant";


export class Player extends Participant {
    nickname: string;

    constructor(socket: Socket, game: Game, nickname: string) {
        super(socket, game);
        this.socket = socket;
        this.nickname = nickname;
        this.game = game;
    }

    destroy() {
        super.destroy();
        this.game.delPlayer(this.nickname);
    }
}
