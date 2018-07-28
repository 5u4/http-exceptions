const HttpException = require('../HttpException');

class HttpVersionNotSupportedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(505, message);
    }
}

module.exports = HttpVersionNotSupportedHttpException;
