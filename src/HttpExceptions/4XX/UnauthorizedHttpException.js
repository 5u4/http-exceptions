const HttpException = require('../HttpException');

class UnauthorizedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(401, message);
    }
}

module.exports = UnauthorizedHttpException;
