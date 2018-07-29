const HttpExceptions = require('../..');
const express        = require('express');
const chai           = require('chai');
const chaiHttp       = require('chai-http');
const should         = chai.should();

chai.use(chaiHttp);

describe('Express app defined endpoint http exception test', function() {
    let server;
    const message = 'This method is not implemented yet';

    before(function () {
        /* create express app */
        const app = express();
        
        /* define an app endpoint */
        app.get('/', (req, res) => {
            throw new HttpExceptions.NotImplementedHttpException(message);
        });

        /* handle exceptions generally */
        app.use((err, req, res, next) => {
            /* http exceptions handling */
            if (err instanceof HttpExceptions.HttpException) {
                return res.status(err.getStatusCode()).json(err.getMessage() ? {message: err.getMessage()} : {});
            }

            /* other errors */
            res.sandStatus(500);
        });

        server = app.listen(3000);
    });

    it('should get 501 not implemented exception', function() {
        chai.request(server).get('/').end(function(err, res) {
            res.should.have.status(501);
            res.body.should.have.property('message').equal(message);
        });
    });

    after(function() {
        server.close();
    });
});

describe('Express router defined endpoint http exception test', function() {
    let server;
    const message = 'This method is not implemented yet';

    before(function () {
        /* create express router  */
        const router = new express.Router();

        /* define a route endpoint */
        router.get('/', (req, res, next) => {
            return next(new HttpExceptions.NotImplementedHttpException('This method is not implemented yet'));
        });

        /* create express app */
        const app = express();

        /* use router */
        app.use(router);

        /* handle exceptions generally */
        app.use((err, req, res, next) => {
            /* http exceptions handling */
            if (err instanceof HttpExceptions.HttpException) {
                return res.status(err.getStatusCode()).json(err.getMessage() ? {message: err.getMessage()} : {});
            }

            /* other errors */
            res.sandStatus(500);
        });

        server = app.listen(3000);
    });

    it('should get 501 not implemented exception', function() {
        chai.request(server).get('/').end(function(err, res) {
            res.should.have.status(501);
            res.body.should.have.property('message').equal(message);
        });
    });

    after(function() {
        server.close();
    });
});
