import { HttpException } from '../HttpException';

export class GoneHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(410, message);
    }
}


