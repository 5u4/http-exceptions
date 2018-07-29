import { HttpException } from '../HttpException';

/**
 * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent 
 * content negotiation itself, and is therefore not a proper end point in the negotiation process.
 */
export class VariantAlsoNegotiatesHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(506, message);
    }
}
