import { HttpException } from '../HttpException';

export class ConflictHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(409, message);
    }
}


