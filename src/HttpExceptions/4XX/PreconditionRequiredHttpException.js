const HttpException = require('../HttpException');

class PreconditionRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(428, message);
    }
}

module.exports = PreconditionRequiredHttpException;
