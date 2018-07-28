const HttpException = require('../HttpException');

class NotAcceptableHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(406, message);
    }
}

module.exports = NotAcceptableHttpException;
