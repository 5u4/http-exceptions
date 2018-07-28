const HttpException = require('../HttpException');

class NetworkAuthenticationRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(511, message);
    }
}

module.exports = NetworkAuthenticationRequiredHttpException;
