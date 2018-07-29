import { HttpException } from '../HttpException';

/**
 * The policy for accessing the resource has not been met in the request. The server should send back all the information 
 * necessary for the client to issue an extended request.
 */
export class NotExtendedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(510, message);
    }
}


