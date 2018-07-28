import { HttpException } from '../HttpException';

export class NotAcceptableHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(406, message);
    }
}


