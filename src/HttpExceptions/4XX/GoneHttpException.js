const HttpException = require('../HttpException');

class GoneHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(410, message);
    }
}

module.exports = GoneHttpException;
