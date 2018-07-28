import { HttpException } from '../HttpException';

export class ForbiddenHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(403, message);
    }
}


