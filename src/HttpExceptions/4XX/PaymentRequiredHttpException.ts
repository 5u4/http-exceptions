import { HttpException } from '../HttpException';

/**
 * Reserved for future use.
 */
export class PaymentRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(402, message);
    }
}
