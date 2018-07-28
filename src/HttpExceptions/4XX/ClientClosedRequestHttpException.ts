import { HttpException } from '../HttpException';

export class ClientClosedRequestHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(499, message);
    }
}


