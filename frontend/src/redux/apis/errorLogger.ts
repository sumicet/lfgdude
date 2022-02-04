/* eslint-disable no-nested-ternary */
import { MiddlewareAPI, isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ERROR } from '../../constants/messages';
// import { toast } from 'react-toastify';

/**
 * Log a warning and show a toast!
 */

export const errorLogger: Middleware = (api: MiddlewareAPI) => next => action => {
    if (action.payload && action.payload.hideError) {
        return next(action);
    }

    if (isRejectedWithValue(action) || (action.payload && action.payload.status === 'error')) {
        let message: string | null = null;
        switch (action.meta.arg.endpointName) {
            case 'getLobbies':
                message = "Oops, looks like we can't find any lobbies.";
                break;
            // set error message
            default:
                break;
        }
        // TODO install react-toastify
        toast.error(
            action.payload.error.message ||
                message ||
                'Oops, an unknown error occurred. It be like that sometimes.'
        );
    }

    return next(action);
};
