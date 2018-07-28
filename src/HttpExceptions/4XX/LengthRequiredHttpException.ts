import { HttpException } from '../HttpException';

export class LengthRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(411, message);
    }
}


