import { HttpException } from '../HttpException';

/**
 * The user has sent too many requests in a given amount of time ("rate limiting").
 */
export class TooManyRequestsHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(429, message);
    }
}
