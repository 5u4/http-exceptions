import { HttpException } from '../HttpException';

export class NotImplementedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(501, message);
    }
}


