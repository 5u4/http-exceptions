import { HttpException } from '../HttpException';

/**
 * The server terminated an operation because it encountered an infinite loop while processing a request with 
 * "Depth: infinity". This status indicates that the entire operation failed.
 */
export class LoopDetectedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(508, message);
    }
}


