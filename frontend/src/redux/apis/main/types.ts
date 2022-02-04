export interface Response<T> {
    data: T;
    errors: Error[];
}

export type ErrorCode = 404 | 500;

export interface Error {
    code: ErrorCode;
    message: string;
}
