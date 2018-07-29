import { HttpException } from '../HttpException';

/**
 * The server is denying access to the resource as a consequence of a legal demand.
 */
export class UnavailableForLegalReasonsHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(451, message);
    }
}
