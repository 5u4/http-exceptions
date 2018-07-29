import { HttpException } from '../HttpException';

/**
 * The server does not support, or refuses to support, the major version of HTTP that was used in the request message.
 */
export class HttpVersionNotSupportedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(505, message);
    }
}
