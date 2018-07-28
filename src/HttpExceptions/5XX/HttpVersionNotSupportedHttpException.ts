import { HttpException } from '../HttpException';

export class HttpVersionNotSupportedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(505, message);
    }
}


