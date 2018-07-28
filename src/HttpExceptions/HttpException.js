class HttpException extends Error
{
    /**
     * @param {Number} statusCode The http response status code
     * @param {String} message    The message of the exception
     */
    constructor(statusCode, message = null) {
        super();
        this.statusCode = statusCode || this.statusCode;
        this.message    = message;
    }

    /**
     * @returns {Number} The http response status code
     */
    getStatusCode() {
        return this.statusCode;
    }

    /**
     * @param {Number} statusCode The http response status code
     */
    setStatusCode(statusCode) {
        this.statusCode = statusCode;
    }

    /**
     * @returns {String} The http response message
     */
    getMessage() {
        return this.message;
    }

    /**
     * @param {String} message The http response message
     */
    setMessage(message) {
        this.message = message;
    }
}

module.exports = HttpException;
