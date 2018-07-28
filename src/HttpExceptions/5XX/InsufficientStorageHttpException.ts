import { HttpException } from '../HttpException';

export class InsufficientStorageHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(507, message);
    }
}


