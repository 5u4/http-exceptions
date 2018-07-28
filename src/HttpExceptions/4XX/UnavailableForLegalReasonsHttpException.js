const HttpException = require('../HttpException');

class UnavailableForLegalReasonsHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(451, message);
    }
}

module.exports = UnavailableForLegalReasonsHttpException;
