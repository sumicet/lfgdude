/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Lobby, lobbyPlaceholder } from '../../models/Lobby';

export interface ModalState {
    active: boolean;
    lobby: Lobby;
}

const initialState: ModalState = {
    active: false,
    lobby: lobbyPlaceholder,
};

export const lobbyModalSlice = createSlice({
    name: 'lobbyModal',
    initialState,
    reducers: {
        setActive: (state, action: PayloadAction<{ active: boolean; lobby?: Lobby }>) => {
            console.log(action.payload.lobby);
            if (action.payload.lobby) {
                state.lobby = action.payload.lobby;
            }
            state.active = action.payload.active;
        },
    },
});

export const { setActive } = lobbyModalSlice.actions;

export default lobbyModalSlice.reducer;
