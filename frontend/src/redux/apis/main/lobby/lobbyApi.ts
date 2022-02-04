import { mainApi } from '../mainApi';

const ep = '/lobby';

export const lobbyApi = mainApi.injectEndpoints({
    endpoints: builder => ({
        // getLobbies: builder.query<
        //     { status: Status; data: any },
        //     { orderBy: string; hideError?: boolean }
        // >({
        //     query: param => `${ep}/lobby`,
        // }),
    }),
    overrideExisting: false,
});

export const {} = lobbyApi;
