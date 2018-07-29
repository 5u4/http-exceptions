import { HttpException } from '../HttpException';

/**
 * A non-standard status code used to instruct nginx to close the connection without sending a response to the client, most 
 * commonly used to deny malicious or malformed requests.
 */
export class ConnectionClosedWithoutResponseHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(444, message);
    }
}
