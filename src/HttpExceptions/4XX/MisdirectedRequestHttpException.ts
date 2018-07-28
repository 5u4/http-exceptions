import { HttpException } from '../HttpException';

export class MisdirectedRequestHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(421, message);
    }
}


