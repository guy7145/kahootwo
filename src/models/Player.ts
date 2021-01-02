export interface Player {
    name: string;
    score?: number;
    isReady: boolean;
    onLeave?: (callback: () => void) => void;
}