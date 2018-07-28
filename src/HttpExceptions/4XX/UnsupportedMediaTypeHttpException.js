const HttpException = require('../HttpException');

class UnsupportedMediaTypeHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(415, message);
    }
}

module.exports = UnsupportedMediaTypeHttpException;
