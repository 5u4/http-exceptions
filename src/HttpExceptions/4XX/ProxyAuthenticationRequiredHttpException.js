const HttpException = require('../HttpException');

class ProxyAuthenticationRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(407, message);
    }
}

module.exports = ProxyAuthenticationRequiredHttpException;
