export class HttpException extends Error
{
    /**
     * @param {Number} statusCode The http response status code
     * @param {String} message    The message of the exception
     */
    constructor(public statusCode: number, message: string = '') {
        super(message);
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
    setStatusCode(statusCode: number) {
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
    setMessage(message: string) {
        this.message = message;
    }
}

