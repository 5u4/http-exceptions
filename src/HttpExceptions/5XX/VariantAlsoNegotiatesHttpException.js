const HttpException = require('../HttpException');

class VariantAlsoNegotiatesHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(506, message);
    }
}

module.exports = VariantAlsoNegotiatesHttpException;
