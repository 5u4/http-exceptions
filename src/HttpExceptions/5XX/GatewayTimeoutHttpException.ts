import { HttpException } from '../HttpException';

/**
 * The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
 */
export class GatewayTimeoutHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(504, message);
    }
}
