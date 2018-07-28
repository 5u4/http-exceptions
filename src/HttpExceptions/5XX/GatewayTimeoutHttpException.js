const HttpException = require('../HttpException');

class GatewayTimeoutHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(504, message);
    }
}

module.exports = GatewayTimeoutHttpException;
