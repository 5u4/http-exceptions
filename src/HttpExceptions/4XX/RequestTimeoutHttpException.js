const HttpException = require('../HttpException');

class RequestTimeoutHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(408, message);
    }
}

module.exports = RequestTimeoutHttpException;
