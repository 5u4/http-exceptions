import { HttpException } from '../HttpException';

/**
 * The server cannot or will not process the request due to something that is perceived to be a client error 
 * (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 */
export class BadRequestHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(400, message);
    }
}
