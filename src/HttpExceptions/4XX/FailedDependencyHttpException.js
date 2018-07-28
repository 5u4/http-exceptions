const HttpException = require('../HttpException');

class FailedDependencyHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(424, message);
    }
}

module.exports = FailedDependencyHttpException;
