const should = require('chai').should();

const fourHundredHttpExceptionTestDataProvider = [
    {exception: require('../../src/HttpExceptions/4XX/BadRequestHttpException'), expectedStatusCode: 400},
    {exception: require('../../src/HttpExceptions/4XX/UnauthorizedHttpException'), expectedStatusCode: 401},
    {exception: require('../../src/HttpExceptions/4XX/PaymentRequiredHttpException'), expectedStatusCode: 402},
    {exception: require('../../src/HttpExceptions/4XX/ForbiddenHttpException'), expectedStatusCode: 403},
    {exception: require('../../src/HttpExceptions/4XX/NotFoundHttpException'), expectedStatusCode: 404},
    {exception: require('../../src/HttpExceptions/4XX/MethodNotAllowedHttpException'), expectedStatusCode: 405},
    {exception: require('../../src/HttpExceptions/4XX/NotAcceptableHttpException'), expectedStatusCode: 406},
    {exception: require('../../src/HttpExceptions/4XX/ProxyAuthenticationRequiredHttpException'), expectedStatusCode: 407},
    {exception: require('../../src/HttpExceptions/4XX/RequestTimeoutHttpException'), expectedStatusCode: 408},
    {exception: require('../../src/HttpExceptions/4XX/ConflictHttpException'), expectedStatusCode: 409},
    {exception: require('../../src/HttpExceptions/4XX/GoneHttpException'), expectedStatusCode: 410},
    {exception: require('../../src/HttpExceptions/4XX/LengthRequiredHttpException'), expectedStatusCode: 411},
    {exception: require('../../src/HttpExceptions/4XX/PreconditionFailedHttpException'), expectedStatusCode: 412},
    {exception: require('../../src/HttpExceptions/4XX/PayloadTooLargeHttpException'), expectedStatusCode: 413},
    {exception: require('../../src/HttpExceptions/4XX/RequestUriTooLongHttpException'), expectedStatusCode: 414},
    {exception: require('../../src/HttpExceptions/4XX/UnsupportedMediaTypeHttpException'), expectedStatusCode: 415},
    {exception: require('../../src/HttpExceptions/4XX/RequestedRangeNotSatisfiableHttpException'), expectedStatusCode: 416},
    {exception: require('../../src/HttpExceptions/4XX/ExpectationFailedHttpException'), expectedStatusCode: 417},
    {exception: require('../../src/HttpExceptions/4XX/IMATeapotHttpException'), expectedStatusCode: 418},
    {exception: require('../../src/HttpExceptions/4XX/MisdirectedRequestHttpException'), expectedStatusCode: 421},
    {exception: require('../../src/HttpExceptions/4XX/UnprocessableEntityHttpException'), expectedStatusCode: 422},
    {exception: require('../../src/HttpExceptions/4XX/LockedHttpException'), expectedStatusCode: 423},
    {exception: require('../../src/HttpExceptions/4XX/FailedDependencyHttpException'), expectedStatusCode: 424},
    {exception: require('../../src/HttpExceptions/4XX/UpgradeRequiredHttpException'), expectedStatusCode: 426},
    {exception: require('../../src/HttpExceptions/4XX/PreconditionRequiredHttpException'), expectedStatusCode: 428},
    {exception: require('../../src/HttpExceptions/4XX/TooManyRequestsHttpException'), expectedStatusCode: 429},
    {exception: require('../../src/HttpExceptions/4XX/RequestHeaderFieldsTooLargeHttpException'), expectedStatusCode: 431},
    {exception: require('../../src/HttpExceptions/4XX/ConnectionClosedWithoutResponseHttpException'), expectedStatusCode: 444},
    {exception: require('../../src/HttpExceptions/4XX/UnavailableForLegalReasonsHttpException'), expectedStatusCode: 451},
    {exception: require('../../src/HttpExceptions/4XX/ClientClosedRequestHttpException'), expectedStatusCode: 499},
];

describe('4XX Http Exception tests', function() {
    fourHundredHttpExceptionTestDataProvider.forEach(function(data) {
        it('should have status code ' + data.expectedStatusCode, function() {
            const httpException = new data.exception();
            httpException.should.have.property('statusCode').equal(data.expectedStatusCode);
        });
    });
});

const fiveHundredHttpExceptionTestDataProvider = [
    {exception: require('../../src/HttpExceptions/5XX/InternalServerErrorHttpException'), expectedStatusCode: 500},
    {exception: require('../../src/HttpExceptions/5XX/NotImplementedHttpException'), expectedStatusCode: 501},
    {exception: require('../../src/HttpExceptions/5XX/BadGatewayHttpException'), expectedStatusCode: 502},
    {exception: require('../../src/HttpExceptions/5XX/ServiceUnavailableHttpException'), expectedStatusCode: 503},
    {exception: require('../../src/HttpExceptions/5XX/GatewayTimeoutHttpException'), expectedStatusCode: 504},
    {exception: require('../../src/HttpExceptions/5XX/HttpVersionNotSupportedHttpException'), expectedStatusCode: 505},
    {exception: require('../../src/HttpExceptions/5XX/VariantAlsoNegotiatesHttpException'), expectedStatusCode: 506},
    {exception: require('../../src/HttpExceptions/5XX/InsufficientStorageHttpException'), expectedStatusCode: 507},
    {exception: require('../../src/HttpExceptions/5XX/LoopDetectedHttpException'), expectedStatusCode: 508},
    {exception: require('../../src/HttpExceptions/5XX/NotExtendedHttpException'), expectedStatusCode: 510},
    {exception: require('../../src/HttpExceptions/5XX/NetworkAuthenticationRequiredHttpException'), expectedStatusCode: 511},
    {exception: require('../../src/HttpExceptions/5XX/NetworkConnectTimeoutErrorHttpException'), expectedStatusCode: 599},
];

describe('5XX Http Exception tests', function() {
    fiveHundredHttpExceptionTestDataProvider.forEach(function(data) {
        it('should have status code ' + data.expectedStatusCode, function() {
            const httpException = new data.exception();
            httpException.should.have.property('statusCode').equal(data.expectedStatusCode);
        });
    });
});
