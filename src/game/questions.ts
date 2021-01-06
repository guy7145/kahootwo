class QuestionPromise {
    promise: Promise<any>;
    resolveFunc: (() => void) | null;

    constructor() {
        this.resolveFunc = null;
        this.promise = new Promise<any>(resolve => this.resolveFunc = () => resolve(null));
    }

    resolve() {
        if (this.resolve) {
            this.resolve();
        }
    }
}

export class Question {
    questionText: string;
    answers: string[];
    correctAnswerIndex: number;

    startPromise: QuestionPromise;
    endPromise: QuestionPromise;

    constructor(questionText: string, answers: string[], correctAnswerIndex: number) {
        this.questionText = questionText
        this.answers = answers
        this.correctAnswerIndex = correctAnswerIndex

        if (correctAnswerIndex < 0 || correctAnswerIndex >= answers.length) {
            throw new Error(`question misconfiguration ("${questionText}")`);
        }

        this.startPromise = new QuestionPromise();
        this.endPromise = new QuestionPromise();
    }

    start() {
        this.startPromise.resolve();
    }

    end() {
        this.endPromise.resolve();
    }

    async awaitStart() {
        await this.startPromise.promise;
    }

    async awaitEnd() {
        await this.endPromise.promise;
    }
}

export const questions: Question[] = [
    new Question(
        "Who am I?",
        ["Crash", "Monster", "Guy Danielli", "Ido ben amihai"],
        0,
    ),
    new Question(
        "What do you do?",
        ["Run", "Poop", "Eat", "Ido ben amihai"],
        3,
    ),
];
