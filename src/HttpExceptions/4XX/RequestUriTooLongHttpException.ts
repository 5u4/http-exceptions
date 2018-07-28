import { HttpException } from '../HttpException';

export class RequestUriTooLongHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(414, message);
    }
}


