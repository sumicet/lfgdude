import { mainApi } from '../mainApi';
import { Response } from '../types';

const ep = '/get_lobbies';

export const lobbyApi = mainApi.injectEndpoints({
    endpoints: builder => ({
        getLobbies: builder.query<Response<any>, void>({
            query: () => `${ep}`,
        }),
    }),
    overrideExisting: false,
});

export const { useGetLobbiesQuery } = lobbyApi;
