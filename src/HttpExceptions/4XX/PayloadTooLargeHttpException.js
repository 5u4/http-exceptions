const HttpException = require('../HttpException');

class PayloadTooLargeHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(413, message);
    }
}

module.exports = PayloadTooLargeHttpException;
