import { HttpException } from '../HttpException';

/**
 * This status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network connect timeout behind 
 * the proxy to a client in front of the proxy.
 */
export class NetworkConnectTimeoutErrorHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(599, message);
    }
}
