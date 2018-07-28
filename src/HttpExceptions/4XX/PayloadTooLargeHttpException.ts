import { HttpException } from '../HttpException';

export class PayloadTooLargeHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(413, message);
    }
}


