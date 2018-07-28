import { HttpException } from '../HttpException';

export class NetworkAuthenticationRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(511, message);
    }
}


