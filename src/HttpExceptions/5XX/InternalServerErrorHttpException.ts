import { HttpException } from '../HttpException';

export class InternalServerErrorHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(500, message);
    }
}


