import { writable } from 'svelte/store';
export const gameId = writable('');
export const nickname = writable('');

export const game = writable(undefined);
