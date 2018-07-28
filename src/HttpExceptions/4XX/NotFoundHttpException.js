const HttpException = require('../HttpException');

class NotFoundHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(404, message);
    }
}

module.exports = NotFoundHttpException;
