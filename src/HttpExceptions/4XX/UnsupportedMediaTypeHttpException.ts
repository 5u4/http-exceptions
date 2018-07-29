import { HttpException } from '../HttpException';

/**
 * The origin server is refusing to service the request because the payload is in a format not supported by this method on the 
 * target resource.
 */
export class UnsupportedMediaTypeHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(415, message);
    }
}


