import { HttpException } from '../HttpException';

export class PreconditionFailedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(412, message);
    }
}


