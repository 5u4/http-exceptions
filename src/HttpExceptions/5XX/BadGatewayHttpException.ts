import { HttpException } from '../HttpException';

/**
 * The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while 
 * attempting to fulfill the request.
 */
export class BadGatewayHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(502, message);
    }
}


