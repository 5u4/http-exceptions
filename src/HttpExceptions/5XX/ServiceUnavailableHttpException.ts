import { HttpException } from '../HttpException';

export class ServiceUnavailableHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(503, message);
    }
}


