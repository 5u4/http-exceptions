import { HttpException } from '../HttpException';

export class VariantAlsoNegotiatesHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(506, message);
    }
}


