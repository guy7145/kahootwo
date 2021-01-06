import GameClient from "./game-client";
import {players} from "../../stores/host";

export default class Host extends GameClient {
    constructor(gameId, secret) {
        super(gameId);
        this.secret = secret;
    }

    login() {
        this.socket.emit('host-login', JSON.stringify({
            gameId: this.gameId,
            secret: this.secret,
        }))
    }

    signSocket() {
        this.socket.on('players-list', list => players.set(list));
    }
}
