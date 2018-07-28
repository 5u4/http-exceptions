const HttpException = require('../HttpException');

class TooManyRequestsHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(429, message);
    }
}

module.exports = TooManyRequestsHttpException;
