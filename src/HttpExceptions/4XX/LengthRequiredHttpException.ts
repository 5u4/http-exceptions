import { HttpException } from '../HttpException';

/**
 * The server refuses to accept the request without a defined Content-Length.
 */
export class LengthRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(411, message);
    }
}


