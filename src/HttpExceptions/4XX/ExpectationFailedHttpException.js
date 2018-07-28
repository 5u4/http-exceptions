const HttpException = require('../HttpException');

class ExpectationFailedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(417, message);
    }
}

module.exports = ExpectationFailedHttpException;
