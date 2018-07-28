import { HttpException } from '../HttpException';

export class RequestTimeoutHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(408, message);
    }
}


