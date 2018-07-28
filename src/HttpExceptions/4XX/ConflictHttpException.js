const HttpException = require('../HttpException');

class ConflictHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(409, message);
    }
}

module.exports = ConflictHttpException;
