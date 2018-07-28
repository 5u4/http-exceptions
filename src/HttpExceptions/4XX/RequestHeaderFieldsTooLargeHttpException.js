const HttpException = require('../HttpException');

class RequestHeaderFieldsTooLargeHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(431, message);
    }
}

module.exports = RequestHeaderFieldsTooLargeHttpException;
