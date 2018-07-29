import { HttpException } from '../HttpException';

/**
 * The method could not be performed on the resource because the requested action depended on another action and that action 
 * failed.
 */
export class FailedDependencyHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(424, message);
    }
}
