import { HttpException } from '../HttpException';

/**
 * The server does not support the functionality required to fulfill the request.
 */
export class NotImplementedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(501, message);
    }
}
