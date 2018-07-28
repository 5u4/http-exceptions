const HttpException = require('../HttpException');

class BadGatewayHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(502, message);
    }
}

module.exports = BadGatewayHttpException;
