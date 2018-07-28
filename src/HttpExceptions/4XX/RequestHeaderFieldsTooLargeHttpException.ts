import { HttpException } from '../HttpException';

export class RequestHeaderFieldsTooLargeHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(431, message);
    }
}


