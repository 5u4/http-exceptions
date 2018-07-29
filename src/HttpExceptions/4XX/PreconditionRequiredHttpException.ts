import { HttpException } from '../HttpException';

/**
 * The origin server requires the request to be conditional.
 */
export class PreconditionRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(428, message);
    }
}


