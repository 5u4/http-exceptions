const HttpException = require('../HttpException');

class ForbiddenHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(403, message);
    }
}

module.exports = ForbiddenHttpException;
