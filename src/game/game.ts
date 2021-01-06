import {Question, questions} from "./questions";
import {Player} from "./player";
import Host from "./host";


export class Game {
    gameId: string;
    hasBegun: boolean = false;
    hasFinished: boolean = false;

    questions: Question[];
    players: Player[];
    host: Host | null = null;

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
        this.sendPlayersListToHost();
        player.notification(`hi ${player.nickname}! welcome to the game`, 4000);
    }

    delPlayer(nickname: string) {
        this.players = this.players.filter(p => p.nickname !== nickname);
        this.sendPlayersListToHost();
    }

    setHost(host: Host) {
        if (this.hasBegun) {
            throw new Error('game already begun!');
        }

        if (this.hasFinished) {
            throw new Error('game already finished!');
        }

        if (this.host) {
            throw new Error('game already has a host');
        }

        this.host = host;
        this.sendPlayersListToHost();
        host.notification(`hi there! please wait for everyone to join and press start`, 10000);
    }

    unsetHost() {
        this.host = null;
    }

    sendPlayersListToHost() {
        console.log(this.players.map(p => p.nickname));
        this.host?.playersList(this.players.map(p => p.nickname));
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
