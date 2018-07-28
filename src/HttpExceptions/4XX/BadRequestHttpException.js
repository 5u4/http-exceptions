const HttpException = require('../HttpException');

class BadRequestHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(400, message);
    }
}

module.exports = BadRequestHttpException;
