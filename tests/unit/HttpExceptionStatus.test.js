const should = require('chai').should();

const fourHundredHttpExceptionTestDataProvider = [
    {exception: require('../../dist').BadRequestHttpException, expectedStatusCode: 400},
    {exception: require('../../dist').UnauthorizedHttpException, expectedStatusCode: 401},
    {exception: require('../../dist').PaymentRequiredHttpException, expectedStatusCode: 402},
    {exception: require('../../dist').ForbiddenHttpException, expectedStatusCode: 403},
    {exception: require('../../dist').NotFoundHttpException, expectedStatusCode: 404},
    {exception: require('../../dist').MethodNotAllowedHttpException, expectedStatusCode: 405},
    {exception: require('../../dist').NotAcceptableHttpException, expectedStatusCode: 406},
    {exception: require('../../dist').ProxyAuthenticationRequiredHttpException, expectedStatusCode: 407},
    {exception: require('../../dist').RequestTimeoutHttpException, expectedStatusCode: 408},
    {exception: require('../../dist').ConflictHttpException, expectedStatusCode: 409},
    {exception: require('../../dist').GoneHttpException, expectedStatusCode: 410},
    {exception: require('../../dist').LengthRequiredHttpException, expectedStatusCode: 411},
    {exception: require('../../dist').PreconditionFailedHttpException, expectedStatusCode: 412},
    {exception: require('../../dist').PayloadTooLargeHttpException, expectedStatusCode: 413},
    {exception: require('../../dist').RequestUriTooLongHttpException, expectedStatusCode: 414},
    {exception: require('../../dist').UnsupportedMediaTypeHttpException, expectedStatusCode: 415},
    {exception: require('../../dist').RequestedRangeNotSatisfiableHttpException, expectedStatusCode: 416},
    {exception: require('../../dist').ExpectationFailedHttpException, expectedStatusCode: 417},
    {exception: require('../../dist').IMATeapotHttpException, expectedStatusCode: 418},
    {exception: require('../../dist').MisdirectedRequestHttpException, expectedStatusCode: 421},
    {exception: require('../../dist').UnprocessableEntityHttpException, expectedStatusCode: 422},
    {exception: require('../../dist').LockedHttpException, expectedStatusCode: 423},
    {exception: require('../../dist').FailedDependencyHttpException, expectedStatusCode: 424},
    {exception: require('../../dist').UpgradeRequiredHttpException, expectedStatusCode: 426},
    {exception: require('../../dist').PreconditionRequiredHttpException, expectedStatusCode: 428},
    {exception: require('../../dist').TooManyRequestsHttpException, expectedStatusCode: 429},
    {exception: require('../../dist').RequestHeaderFieldsTooLargeHttpException, expectedStatusCode: 431},
    {exception: require('../../dist').ConnectionClosedWithoutResponseHttpException, expectedStatusCode: 444},
    {exception: require('../../dist').UnavailableForLegalReasonsHttpException, expectedStatusCode: 451},
    {exception: require('../../dist').ClientClosedRequestHttpException, expectedStatusCode: 499},
];

describe('4XX http exception tests', function() {
    fourHundredHttpExceptionTestDataProvider.forEach(function(data) {
        it('should have status code ' + data.expectedStatusCode, function() {
            const httpException = new data.exception();
            httpException.should.have.property('statusCode').equal(data.expectedStatusCode);
            httpException.getStatusCode().should.be.equal(data.expectedStatusCode);
        });
    });
});

const fiveHundredHttpExceptionTestDataProvider = [
    {exception: require('../../dist').InternalServerErrorHttpException, expectedStatusCode: 500},
    {exception: require('../../dist').NotImplementedHttpException, expectedStatusCode: 501},
    {exception: require('../../dist').BadGatewayHttpException, expectedStatusCode: 502},
    {exception: require('../../dist').ServiceUnavailableHttpException, expectedStatusCode: 503},
    {exception: require('../../dist').GatewayTimeoutHttpException, expectedStatusCode: 504},
    {exception: require('../../dist').HttpVersionNotSupportedHttpException, expectedStatusCode: 505},
    {exception: require('../../dist').VariantAlsoNegotiatesHttpException, expectedStatusCode: 506},
    {exception: require('../../dist').InsufficientStorageHttpException, expectedStatusCode: 507},
    {exception: require('../../dist').LoopDetectedHttpException, expectedStatusCode: 508},
    {exception: require('../../dist').NotExtendedHttpException, expectedStatusCode: 510},
    {exception: require('../../dist').NetworkAuthenticationRequiredHttpException, expectedStatusCode: 511},
    {exception: require('../../dist').NetworkConnectTimeoutErrorHttpException, expectedStatusCode: 599},
];

describe('5XX http exception tests', function() {
    fiveHundredHttpExceptionTestDataProvider.forEach(function(data) {
        it('should have status code ' + data.expectedStatusCode, function() {
            const httpException = new data.exception();
            httpException.should.have.property('statusCode').equal(data.expectedStatusCode);
            httpException.getStatusCode().should.be.equal(data.expectedStatusCode);
        });
    });
});
