const HttpException = require('../HttpException');

class LockedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(423, message);
    }
}

module.exports = LockedHttpException;
