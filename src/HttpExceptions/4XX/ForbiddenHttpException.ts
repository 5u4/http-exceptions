import { HttpException } from '../HttpException';

/**
 * The server understood the request but refuses to authorize it.
 */
export class ForbiddenHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(403, message);
    }
}


