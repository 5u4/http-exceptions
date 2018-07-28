import { HttpException } from '../HttpException';

export class UnauthorizedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(401, message);
    }
}


