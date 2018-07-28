import { HttpException } from '../HttpException';

export class ProxyAuthenticationRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(407, message);
    }
}


