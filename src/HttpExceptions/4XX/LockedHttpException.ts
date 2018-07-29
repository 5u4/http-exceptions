import { HttpException } from '../HttpException';

/**
 * The source or destination resource of a method is locked.
 */
export class LockedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(423, message);
    }
}
