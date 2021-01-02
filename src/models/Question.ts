import { Player } from "./Player";

export interface Question {
    question: string;
    answers: string[];
    correctAnswer: string;
    responded: { player: Player, answer: string }[];
    startTime: number;
}