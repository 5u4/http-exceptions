import { HttpException } from '../HttpException';

export class GatewayTimeoutHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(504, message);
    }
}


