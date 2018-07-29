import { HttpException } from '../HttpException';

/**
 * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades 
 * to a different protocol.
 */
export class UpgradeRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(426, message);
    }
}


