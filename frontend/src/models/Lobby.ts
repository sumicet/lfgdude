export interface Lobby {
    title: string;
    game: {
        id: string;
        name: string;
    };
    leader: {
        id: string;
        username: string;
        image: string;
    };
    tags: string[];
    players: {
        num: number;
        max: number;
    };
}
