export type IHelperFunctionReturn = {
    message: string;
    error: false;
    result?: string;
} | {
    error: true;
    message: string;
};
