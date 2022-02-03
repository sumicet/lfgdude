import { User } from './User';

export interface Lobby {
    id: string;
    title: string;
    game: {
        id: string;
        name: string;
        code?: string; // in-game lobby code
    };
    leader: User;
    tags: string[];
    players: {
        max: number;
        list: User[];
    };
}
