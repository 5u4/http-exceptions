const HttpException = require('../HttpException');

class PreconditionFailedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(412, message);
    }
}

module.exports = PreconditionFailedHttpException;
