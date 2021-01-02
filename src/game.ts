import { GameState } from './models/GameState';
import { Player } from './models/Player';

export default class Game {
    state: GameState;
    players: Player[];

    constructor() {
        this.state = GameState.WaitingForPlayers;
        this.players = [];
    }

    playerJoin(player: Player) {
        if (this.players.map(x => x.name).includes(player.name)) {
            this.players.push(player);
        }
    }

    startGame() {

    }

    answerQuestion() {

    }


}