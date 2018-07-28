import { HttpException } from '../HttpException';

export class ExpectationFailedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(417, message);
    }
}


