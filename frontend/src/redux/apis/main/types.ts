export interface Response<T> {
    data: T;
    errors: Error[];
}

export interface Error {
    code: number;
    message: string;
}
