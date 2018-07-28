const HttpException = require('../HttpException');

class ClientClosedRequestHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(499, message);
    }
}

module.exports = ClientClosedRequestHttpException;
