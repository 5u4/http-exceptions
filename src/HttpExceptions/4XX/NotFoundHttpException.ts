import { HttpException } from '../HttpException';

export class NotFoundHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(404, message);
    }
}


