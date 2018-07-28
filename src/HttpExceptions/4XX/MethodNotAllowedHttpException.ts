import { HttpException } from '../HttpException';

export class MethodNotAllowedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(405, message);
    }
}


