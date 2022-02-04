import { User } from './User';
export interface Lobby {
    id: string;
    title: string;
    // voice chat
    vc?: {
        invite: string; // invite link to discord
        name: string;
    };
    game: {
        id: string;
        name: string;
        code?: string; // in-game lobby code
    };
    owner: User;
    tags: string[];
    players: {
        max: number;
        list: User[];
    };
}

export const lobbyPlaceholder: Lobby = {
    id: '',
    title: '',
    vc: {
        invite: '',
        name: '',
    },
    game: {
        id: '',
        name: '',
        code: '',
    },
    owner: {
        id: '',
        image: '',
        username: '',
    },
    tags: ['', '', ''],
    players: {
        max: 12,
        list: [],
    },
};
