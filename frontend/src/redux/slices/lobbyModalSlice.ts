/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Lobby, lobbyPlaceholder } from '../../models/Lobby';
import { LobbyModalSize } from './types';

export interface ModalState {
    active: boolean;
    lobby: Lobby;
    size: LobbyModalSize;
}

const initialState: ModalState = {
    active: false,
    lobby: lobbyPlaceholder,
    size: 'default',
};

export const lobbyModalSlice = createSlice({
    name: 'lobbyModal',
    initialState,
    reducers: {
        setActive: (
            state,
            action: PayloadAction<{ active?: boolean; size?: LobbyModalSize; lobby?: Lobby }>
        ) => {
            if (action.payload.lobby) {
                state.lobby = action.payload.lobby;
            }
            if (action.payload.size) {
                state.size = action.payload.size;
            }
            if (action.payload.active !== undefined) {
                state.active = action.payload.active;
            }
        },
    },
});

export const { setActive } = lobbyModalSlice.actions;

export default lobbyModalSlice.reducer;
