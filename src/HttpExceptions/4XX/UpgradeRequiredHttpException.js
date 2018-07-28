const HttpException = require('../HttpException');

class UpgradeRequiredHttpException extends HttpException
{
    /**
     * @param {String} message The error message
     */
    constructor(message = null) {
        super(426, message);
    }
}

module.exports = UpgradeRequiredHttpException;
