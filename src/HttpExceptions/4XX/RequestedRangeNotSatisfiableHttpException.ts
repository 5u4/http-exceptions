import { HttpException } from '../HttpException';

/**
 * None of the ranges in the request's Range header field1 overlap the current extent of the selected resource or that the set 
 * of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.
 */
export class RequestedRangeNotSatisfiableHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message: string = '') {
        super(416, message);
    }
}


