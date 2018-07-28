const HttpException = require('../HttpException');

class RequestedRangeNotSatisfiableHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(416, message);
    }
}

module.exports = RequestedRangeNotSatisfiableHttpException;
