import { HttpException } from '../HttpException';

export class RequestedRangeNotSatisfiableHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(416, message);
    }
}


