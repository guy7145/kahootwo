import {Question, questions} from "./questions";
import {Player} from "./player";
import Host from "./host";


export class Game {
    gameId: string;

    questions: Question[];
    currentQuestion: Question | null = null;
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
        this.players.push(player);
        this.sendPlayersListToHost();
    }

    delPlayer(nickname: string) {
        this.players = this.players.filter(p => p.nickname !== nickname);
        this.sendPlayersListToHost();
    }

    setHost(host: Host) {
        if (this.host) {
            throw new Error('game already has a host');
        }

        this.host = host;
        this.sendPlayersListToHost();
    }

    unsetHost() {
        this.host = null;
    }

    sendPlayersListToHost() {
        this.host?.playersList(this.players.map(p => p.nickname));
    }

    answerQuestion() {

    }

    async start() {
        if (this.currentQuestion) {
            return;
        }
        let i = 0;
        this.players.forEach(p => p.start());
        while (i < this.questions.length) {
            const q = this.questions[i];
            this.currentQuestion = q;
            const startTime = Date.now();
            q.start();
            this.players.forEach(p => p.question(q, startTime));
            this.host?.showQuestion(this.currentQuestion, startTime);
            setTimeout(() => q.end(), q.answerTime + 30 * 1000);
            await this.currentQuestion.awaitEnd();
            this.host?.scores(this.players.map(p => ({
                nickname: p.nickname,
                score: p.score,
            })));
            i++;
        }
        this.finish();
    }

    private finish() {

    }
}
