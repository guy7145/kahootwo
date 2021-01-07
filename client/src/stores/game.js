import { writable } from 'svelte/store';
export const gameId = writable('');
export const nickname = writable('');

export const game = writable(undefined);

export const questionId = writable('');
export const questionStartTime = writable(0);
export const hostQuestionInfo = writable({
    questionText: '',
    answers: [],
    answerTime: 0,
});