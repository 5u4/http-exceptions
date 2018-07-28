import { HttpException } from '../HttpException';

export class LockedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(423, message);
    }
}


