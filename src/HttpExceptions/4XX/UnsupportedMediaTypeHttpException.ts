import { HttpException } from '../HttpException';

export class UnsupportedMediaTypeHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(415, message);
    }
}


