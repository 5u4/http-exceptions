const HttpException = require('../HttpException');

class ConnectionClosedWithoutResponseHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(444, message);
    }
}

module.exports = ConnectionClosedWithoutResponseHttpException;
