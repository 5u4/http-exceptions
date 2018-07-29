import { HttpException } from '../HttpException';

/**
 * The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.
 */
export class ServiceUnavailableHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(503, message);
    }
}


