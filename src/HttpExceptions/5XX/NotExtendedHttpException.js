const HttpException = require('../HttpException');

class NotExtendedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(510, message);
    }
}

module.exports = NotExtendedHttpException;
