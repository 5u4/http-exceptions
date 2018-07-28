import { HttpException } from '../HttpException';

export class FailedDependencyHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(424, message);
    }
}


