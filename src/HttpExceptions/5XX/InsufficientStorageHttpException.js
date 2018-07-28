const HttpException = require('../HttpException');

class InsufficientStorageHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(507, message);
    }
}

module.exports = InsufficientStorageHttpException;
