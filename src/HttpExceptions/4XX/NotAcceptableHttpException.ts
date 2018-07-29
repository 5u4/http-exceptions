import { HttpException } from '../HttpException';

/**
 * The target resource does not have a current representation that would be acceptable to the user agent, according to 
 * the proactive negotiation header fields received in the request, and the server is unwilling to supply a default 
 * representation.
 */
export class NotAcceptableHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(406, message);
    }
}
