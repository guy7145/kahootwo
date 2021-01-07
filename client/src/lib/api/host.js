import GameClient from "./game-client";
import {players} from "../../stores/host";
import {SOCKET_ACTIONS} from "./consts";

export default class Host extends GameClient {
    constructor(gameId, secret) {
        super(gameId);
        this.secret = secret;
        this.scores = [];
    }

    login() {
        this.socket.emit('host-login', JSON.stringify({
            gameId: this.gameId,
            secret: this.secret,
        }))
    }

    signSocket() {
        this.socket.on(SOCKET_ACTIONS.PLAYERS_LIST, list => players.set(list));
        this.socket.on(SOCKET_ACTIONS.QUESTION, (questionText, answers, answerTime, startTime) => this.question(
            questionText, answers, answerTime, startTime
        ));
        this.socket.on('scores', list => players.set(list));
    }

    question(questionText, answers, answerTime, startTime) {
        console.log('questionText, answers, answerTime, startTime')
        console.log(questionText, answers, answerTime, startTime)
    }

    start() {
        this.socket.emit('start-game');
    }

    scores(scores) {
        this.scores = scores;
    }
}
