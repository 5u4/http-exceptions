const HttpException = require('../HttpException');

class RequestUriTooLongHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(414, message);
    }
}

module.exports = RequestUriTooLongHttpException;
