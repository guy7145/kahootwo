import GameClient from "./game-client";
import {SOCKET_ACTIONS} from "./consts";
import {questionId} from "../../stores/game";
import {navigate} from "svelte-routing";


export default class Player extends GameClient {
    constructor(gameId, nickname) {
        super(gameId);
        this.nickname = nickname;
    }

    signSocket() {
        this.socket.on(SOCKET_ACTIONS.PLAYERS_LIST, console.log);
        this.socket.on(SOCKET_ACTIONS.QUESTION, (questionId, startTime) => this.question(questionId, startTime));
        this.socket.on(SOCKET_ACTIONS.GAME_END, console.log);
        this.socket.on(SOCKET_ACTIONS.GAME_START, () => this.start());
    }

    login() {
        this.socket.emit(SOCKET_ACTIONS.LOGIN, JSON.stringify({
            nickname: this.nickname,
            gameId: this.gameId,
        }))
    }

    question(questionId, startTime) {
        console.log('question');
        console.log(questionId, startTime);
    }

    answer(answerNumber) {
        console.log('questionId', questionId);
        this.socket.emit('answer', questionId, answerNumber);
    }

    start() {
        navigate('/game');
    }
}
