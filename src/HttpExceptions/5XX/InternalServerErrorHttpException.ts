import { HttpException } from '../HttpException';

/**
 * The server encountered an unexpected condition that prevented it from fulfilling the request.
 */
export class InternalServerErrorHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(500, message);
    }
}


