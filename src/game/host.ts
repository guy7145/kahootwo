import Participant from "./participant";
import {Socket} from "socket.io";
import {Game} from "./game";
import {Question} from "./questions";

export default class Host extends Participant {
    constructor(socket: Socket, game: Game) {
        super(socket, game);
        socket.on('start-game', () => this.game.start());
    }

    destroy() {
        super.destroy();
        this.game.unsetHost();
    }

    playersList(players: string[]) {
        this.socket.emit('players-list', players);
    }

    showQuestion(q: Question, startTime: number) {
        const {questionText, answers, answerTime} = q;
        this.socket.emit('question', questionText, answers, answerTime, startTime);
    }

    scores(info: {nickname: string, score: number}[]) {
        this.socket.emit('scores', info);
    }
}
