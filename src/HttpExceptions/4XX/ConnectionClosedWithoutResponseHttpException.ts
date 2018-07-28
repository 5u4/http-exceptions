import { HttpException } from '../HttpException';

export class ConnectionClosedWithoutResponseHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(444, message);
    }
}


