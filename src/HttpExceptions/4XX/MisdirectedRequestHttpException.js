const HttpException = require('../HttpException');

class MisdirectedRequestHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(421, message);
    }
}

module.exports = MisdirectedRequestHttpException;
