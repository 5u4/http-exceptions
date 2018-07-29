import { HttpException } from '../HttpException';

/**
 * The request could not be completed due to a conflict with the current state of the target resource. This code is used 
 * in situations where the user might be able to resolve the conflict and resubmit the request.
 */
export class ConflictHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(409, message);
    }
}


