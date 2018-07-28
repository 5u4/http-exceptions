import { HttpException } from '../HttpException';

export class PreconditionRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(428, message);
    }
}


