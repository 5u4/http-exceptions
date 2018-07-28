const HttpException = require('../HttpException');

class LengthRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(411, message);
    }
}

module.exports = LengthRequiredHttpException;
