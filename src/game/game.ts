import {Question, questions} from "./questions";
import {Player} from "./player";


export class Game {
    gameId: string;
    hasBegun: boolean = false;
    hasFinished: boolean = false;

    questions: Question[];
    players: Player[];
    // host: Host | null = null;

    constructor(gameId: string) {
        this.gameId = gameId;
        this.players = [];
        this.questions = [...questions];
    }

    isNicknameTaken(nickname: string) {
        return this.players.map(p => p.nickname).includes(nickname);
    }

    addPlayer(player: Player) {
        if (this.hasBegun) {
            throw new Error('game already begun!');
        }

        if (this.hasFinished) {
            throw new Error('game already finished!');
        }

        this.players.push(player);
        player.notification(`hi ${player.nickname}! welcome to the game`);
    }

    answerQuestion() {

    }

    start() {
        this.hasBegun = true;
    }

    private finish() {
        this.hasFinished = true;
    }
}
