import { HttpException } from '../HttpException';

/**
 * The request has not been applied because it lacks valid authentication credentials for the target resource.
 */
export class UnauthorizedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(401, message);
    }
}
