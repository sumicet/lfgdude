export type ErrorCode = 404 | 500;

export interface Error {
    code: ErrorCode;
    message: string;
}
