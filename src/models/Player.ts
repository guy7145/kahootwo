export enum PlayerStatus {
    Online,
    Offline
}

export interface Player {
    name: string;
    score?: number;
    isReady: boolean;
    status: PlayerStatus;
}