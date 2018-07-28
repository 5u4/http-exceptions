import { HttpException } from '../HttpException';

export class BadRequestHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(400, message);
    }
}


