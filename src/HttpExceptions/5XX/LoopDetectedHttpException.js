const HttpException = require('../HttpException');

class LoopDetectedHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(508, message);
    }
}

module.exports = LoopDetectedHttpException;
