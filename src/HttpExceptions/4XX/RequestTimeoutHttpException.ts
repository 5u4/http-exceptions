import { HttpException } from '../HttpException';

/**
 * The server did not receive a complete request message within the time that it was prepared to wait.
 */
export class RequestTimeoutHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(408, message);
    }
}


