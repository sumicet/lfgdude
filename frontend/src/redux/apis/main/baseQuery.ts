import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { config } from '../../../config';

const baseQuery = fetchBaseQuery({
    baseUrl: `${config.apiUri}`,
    prepareHeaders: (headers, { getState }) => {
        // modify headers here

        return headers;
    },
});

export default baseQuery;
