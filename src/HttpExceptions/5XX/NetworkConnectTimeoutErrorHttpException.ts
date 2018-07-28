import { HttpException } from '../HttpException';

export class NetworkConnectTimeoutErrorHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(599, message);
    }
}


