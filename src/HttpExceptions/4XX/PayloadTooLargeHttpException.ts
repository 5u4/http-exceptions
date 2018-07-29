import { HttpException } from '../HttpException';

/**
 * The server is refusing to process a request because the request payload is larger than the server is willing or able 
 * to process.
 */
export class PayloadTooLargeHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(413, message);
    }
}
