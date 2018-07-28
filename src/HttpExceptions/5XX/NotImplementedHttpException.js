const HttpException = require('../HttpException');

class NotImplementedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(501, message);
    }
}

module.exports = NotImplementedHttpException;
