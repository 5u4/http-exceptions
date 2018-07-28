import { HttpException } from '../HttpException';

export class UpgradeRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(426, message);
    }
}


