import { HttpException } from '../HttpException';

/**
 * The method could not be performed on the resource because the server is unable to store the representation needed 
 * to successfully complete the request.
 */
export class InsufficientStorageHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(507, message);
    }
}


