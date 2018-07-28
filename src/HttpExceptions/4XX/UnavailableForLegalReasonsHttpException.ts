import { HttpException } from '../HttpException';

export class UnavailableForLegalReasonsHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(451, message);
    }
}


