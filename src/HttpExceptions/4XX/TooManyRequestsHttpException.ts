import { HttpException } from '../HttpException';

export class TooManyRequestsHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(429, message);
    }
}


