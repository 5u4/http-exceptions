import { HttpException } from '../HttpException';

/**
 * The request was directed at a server that is not able to produce a response. This can be sent by a server that is not 
 * configured to produce responses for the combination of scheme and authority that are included in the request URI.
 */
export class MisdirectedRequestHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(421, message);
    }
}
