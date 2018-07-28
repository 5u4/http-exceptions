const should        = require('chai').should();
const HttpException = require('../../src/HttpExceptions/HttpException');

describe('Http exception message tests', function() {
    it('should return the correct message after construct', function() {
        const message = 'test message';

        const httpException = new HttpException(400, message);

        httpException.should.have.property('message').equal(message);
        httpException.getMessage().should.be.equal(message);
    });

    it('should return the correct message after set message', function() {
        const message = 'test message';

        const httpException = new HttpException(400);

        httpException.should.have.property('message').null;

        httpException.setMessage(message);
        
        httpException.getMessage().should.be.equal(message);
    });
});
