import { HttpException } from '../HttpException';

export class UnprocessableEntityHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(422, message);
    }
}


