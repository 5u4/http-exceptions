const HttpException = require('../HttpException');

class PaymentRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(402, message);
    }
}

module.exports = PaymentRequiredHttpException;
