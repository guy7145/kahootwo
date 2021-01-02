import { GameState } from './GameState';
import { Player } from './Player';
import { Question } from './Question';

export interface Game {
    state: GameState;
    players: Player[];
    questions: Question[];
    currentQuestion: number;
}