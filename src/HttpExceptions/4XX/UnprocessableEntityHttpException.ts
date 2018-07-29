import { HttpException } from '../HttpException';

/**
 * The server understands the content type of the request entity (hence a 415 Unsupported Media Type status code is 
 * inappropriate), and the syntax of the request entity is correct (thus a 400 Bad Request status code is inappropriate) but was 
 * unable to process the contained instructions.
 */
export class UnprocessableEntityHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(422, message);
    }
}


