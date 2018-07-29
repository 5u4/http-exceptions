import { HttpException } from '../HttpException';

/**
 * A non-standard status code introduced by nginx for the case when a client closes the connection while nginx is processing 
 * the request.
 */
export class ClientClosedRequestHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(499, message);
    }
}
