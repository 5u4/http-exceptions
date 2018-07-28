import { HttpException } from '../HttpException';

export class IMATeapotHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(418, message);
    }
}


