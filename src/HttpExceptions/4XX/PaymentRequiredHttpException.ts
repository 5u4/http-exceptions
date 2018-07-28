import { HttpException } from '../HttpException';

export class PaymentRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(402, message);
    }
}


