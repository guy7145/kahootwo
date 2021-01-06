import Participant from "./participant";
import {Socket} from "socket.io";
import {Game} from "./game";

export default class Host extends Participant {
    constructor(socket: Socket, game: Game) {
        super(socket, game);
    }

    destroy() {
        super.destroy();
        this.game.unsetHost();
    }

    playersList(players: string[]) {
        this.socket.emit('players-list', players);
    }
}
