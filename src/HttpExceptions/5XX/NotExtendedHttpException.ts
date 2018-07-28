import { HttpException } from '../HttpException';

export class NotExtendedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(510, message);
    }
}


