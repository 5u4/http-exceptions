import { HttpException } from '../HttpException';

/**
 * The target resource is no longer available at the origin server and that this condition is likely to be permanent.
 */
export class GoneHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(410, message);
    }
}


