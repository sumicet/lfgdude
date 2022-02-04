import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { config } from '../../../config';

const baseQuery = fetchBaseQuery({
    baseUrl: `${config.apiUri}/api/v1`,
    prepareHeaders: (headers, { getState }) => {
        // modify headers here

        return headers;
    },
});

export default baseQuery;
