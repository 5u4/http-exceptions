import { HttpException } from '../HttpException';

/**
 * Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY 
 * be short and stout.
 */
export class IMATeapotHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(418, message);
    }
}


