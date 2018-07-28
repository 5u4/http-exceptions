const HttpException = require('../HttpException');

class UnprocessableEntityHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(422, message);
    }
}

module.exports = UnprocessableEntityHttpException;
