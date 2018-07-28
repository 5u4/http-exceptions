const HttpException = require('../HttpException');

class NetworkConnectTimeoutErrorHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(599, message);
    }
}

module.exports = NetworkConnectTimeoutErrorHttpException;
