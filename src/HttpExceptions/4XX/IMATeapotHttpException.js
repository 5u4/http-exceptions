const HttpException = require('../HttpException');

class IMATeapotHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(418, message);
    }
}

module.exports = IMATeapotHttpException;
