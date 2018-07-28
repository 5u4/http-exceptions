const HttpException = require('../HttpException');

class ServiceUnavailableHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(503, message);
    }
}

module.exports = ServiceUnavailableHttpException;
