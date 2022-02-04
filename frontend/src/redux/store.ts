import { configureStore } from '@reduxjs/toolkit';
import { errorLogger } from './apis/errorLogger';
import { mainApi } from './apis/main/mainApi';
import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat([mainApi.middleware, errorLogger]),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
