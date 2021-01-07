import {Socket} from "socket.io";
import {Game} from "./game";
import Participant from "./participant";
import {Question} from "./questions";


export class Player extends Participant {
    nickname: string;
    currentQuestion: {
        q: Question, id: number, startTime: number
    } | null = null;
    score: number = 0;

    constructor(socket: Socket, game: Game, nickname: string) {
        super(socket, game);
        this.socket = socket;
        this.nickname = nickname;
        this.game = game;

        this.socket.on('answer', (questionId, answerIndex) => this.answer(questionId, answerIndex))
    }

    destroy() {
        super.destroy();
        this.game.delPlayer(this.nickname);
    }

    question(q: Question, startTime: number) {
        const questionId = Math.random();
        this.currentQuestion = {q, id: questionId, startTime};
        this.socket.emit('question', questionId, startTime);
    }

    answer(questionId: number, answerIndex: number) {
        if (!this.currentQuestion) {
            return;
        }

        const {q, id, startTime} = this.currentQuestion;

        if (questionId !== id) {
            return;
        }

        if (q.correctAnswerIndex === answerIndex) {
            this.score += q.score * (Date.now() - startTime + 1) / q.answerTime;
        }
    }

    start() {
        this.socket.emit('start-game');
    }
}
