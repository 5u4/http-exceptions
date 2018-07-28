const HttpException = require('../HttpException');

class MethodNotAllowedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(405, message);
    }
}

module.exports = MethodNotAllowedHttpException;
