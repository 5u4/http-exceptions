const HttpException = require('../HttpException');

class InternalServerErrorHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(500, message);
    }
}

module.exports = InternalServerErrorHttpException;
