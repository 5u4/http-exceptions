import { HttpException } from '../HttpException';

export class LoopDetectedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(508, message);
    }
}


