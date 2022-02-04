import { combineReducers } from '@reduxjs/toolkit';
import { mainApi } from './apis/main/mainApi';
import lobbyModalSlice from './slices/lobbyModalSlice';

const rootReducer = combineReducers({
    lobbyModal: lobbyModalSlice,
    [mainApi.reducerPath]: mainApi.reducer,
});

export default rootReducer;
