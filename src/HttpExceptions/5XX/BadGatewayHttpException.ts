import { HttpException } from '../HttpException';

export class BadGatewayHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(502, message);
    }
}


