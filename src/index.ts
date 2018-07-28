/**
 * The general HttpException class
 */
export { HttpException } from './HttpExceptions/HttpException';

/**
 * The server cannot or will not process the request due to something that is perceived to be a client error 
 * (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 */
export { BadRequestHttpException } from './HttpExceptions/4XX/BadRequestHttpException';

/**
 * The request has not been applied because it lacks valid authentication credentials for the target resource.
 */
export { UnauthorizedHttpException } from './HttpExceptions/4XX/UnauthorizedHttpException';

/**
 * Reserved for future use.
 */
export { PaymentRequiredHttpException } from './HttpExceptions/4XX/PaymentRequiredHttpException';

/**
 * The server understood the request but refuses to authorize it.
 */
export { ForbiddenHttpException } from './HttpExceptions/4XX/ForbiddenHttpException';

/**
 * The origin server did not find a current representation for the target resource or is not willing to disclose that 
 * one exists.
 */
export { NotFoundHttpException } from './HttpExceptions/4XX/NotFoundHttpException';

/**
 * The method received in the request-line is known by the origin server but not supported by the target resource.
 */
export { MethodNotAllowedHttpException } from './HttpExceptions/4XX/MethodNotAllowedHttpException';

/**
 * The target resource does not have a current representation that would be acceptable to the user agent, according to 
 * the proactive negotiation header fields received in the request, and the server is unwilling to supply a default 
 * representation.
 */
export { NotAcceptableHttpException } from './HttpExceptions/4XX/NotAcceptableHttpException';

/**
 * Similar to 401 Unauthorized, but it indicates that the client needs to authenticate itself in order to use a proxy.
 */
export { ProxyAuthenticationRequiredHttpException } from './HttpExceptions/4XX/ProxyAuthenticationRequiredHttpException';

/**
 * The server did not receive a complete request message within the time that it was prepared to wait.
 */
export { RequestTimeoutHttpException } from './HttpExceptions/4XX/RequestTimeoutHttpException';

/**
 * The request could not be completed due to a conflict with the current state of the target resource. This code is used 
 * in situations where the user might be able to resolve the conflict and resubmit the request.
 */
export { ConflictHttpException } from './HttpExceptions/4XX/ConflictHttpException';

/**
 * The target resource is no longer available at the origin server and that this condition is likely to be permanent.
 */
export { GoneHttpException } from './HttpExceptions/4XX/GoneHttpException';

/**
 * The server refuses to accept the request without a defined Content-Length.
 */
export { LengthRequiredHttpException } from './HttpExceptions/4XX/LengthRequiredHttpException';

/**
 * One or more conditions given in the request header fields evaluated to false when tested on the server.
 */
export { PreconditionFailedHttpException } from './HttpExceptions/4XX/PreconditionFailedHttpException';

/**
 * The server is refusing to process a request because the request payload is larger than the server is willing or able 
 * to process.
 */
export { PayloadTooLargeHttpException } from './HttpExceptions/4XX/PayloadTooLargeHttpException';

/**
 * The server is refusing to service the request because the request-target is longer than the server is willing to interpret.
 */
export { RequestUriTooLongHttpException } from './HttpExceptions/4XX/RequestUriTooLongHttpException';

/**
 * The origin server is refusing to service the request because the payload is in a format not supported by this method on the 
 * target resource.
 */
export { UnsupportedMediaTypeHttpException } from './HttpExceptions/4XX/UnsupportedMediaTypeHttpException';

/**
 * None of the ranges in the request's Range header field1 overlap the current extent of the selected resource or that the set 
 * of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.
 */
export { RequestedRangeNotSatisfiableHttpException } from './HttpExceptions/4XX/RequestedRangeNotSatisfiableHttpException';

/**
 * The expectation given in the request's Expect header field could not be met by at least one of the inbound servers.
 */
export { ExpectationFailedHttpException } from './HttpExceptions/4XX/ExpectationFailedHttpException';

/**
 * Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY 
 * be short and stout.
 */
export { IMATeapotHttpException } from './HttpExceptions/4XX/IMATeapotHttpException';

/**
 * The request was directed at a server that is not able to produce a response. This can be sent by a server that is not 
 * configured to produce responses for the combination of scheme and authority that are included in the request URI.
 */
export { MisdirectedRequestHttpException } from './HttpExceptions/4XX/MisdirectedRequestHttpException';

/**
 * The server understands the content type of the request entity (hence a 415 Unsupported Media Type status code is 
 * inappropriate), and the syntax of the request entity is correct (thus a 400 Bad Request status code is inappropriate) but was 
 * unable to process the contained instructions.
 */
export { UnprocessableEntityHttpException } from './HttpExceptions/4XX/UnprocessableEntityHttpException';

/**
 * The source or destination resource of a method is locked.
 */
export { LockedHttpException } from './HttpExceptions/4XX/LockedHttpException';

/**
 * The method could not be performed on the resource because the requested action depended on another action and that action 
 * failed.
 */
export { FailedDependencyHttpException } from './HttpExceptions/4XX/FailedDependencyHttpException';

/**
 * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades 
 * to a different protocol.
 */
export { UpgradeRequiredHttpException } from './HttpExceptions/4XX/UpgradeRequiredHttpException';

/**
 * The origin server requires the request to be conditional.
 */
export { PreconditionRequiredHttpException } from './HttpExceptions/4XX/PreconditionRequiredHttpException';

/**
 * The user has sent too many requests in a given amount of time ("rate limiting").
 */
export { TooManyRequestsHttpException } from './HttpExceptions/4XX/TooManyRequestsHttpException';

/**
 * The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after 
 * reducing the size of the request header fields.
 */
export { RequestHeaderFieldsTooLargeHttpException } from './HttpExceptions/4XX/RequestHeaderFieldsTooLargeHttpException';

/**
 * A non-standard status code used to instruct nginx to close the connection without sending a response to the client, most 
 * commonly used to deny malicious or malformed requests.
 */
export { ConnectionClosedWithoutResponseHttpException } from './HttpExceptions/4XX/ConnectionClosedWithoutResponseHttpException';

/**
 * The server is denying access to the resource as a consequence of a legal demand.
 */
export { UnavailableForLegalReasonsHttpException } from './HttpExceptions/4XX/UnavailableForLegalReasonsHttpException';

/**
 * A non-standard status code introduced by nginx for the case when a client closes the connection while nginx is processing 
 * the request.
 */
export { ClientClosedRequestHttpException } from './HttpExceptions/4XX/ClientClosedRequestHttpException';

/**
 * The server encountered an unexpected condition that prevented it from fulfilling the request.
 */
export { InternalServerErrorHttpException } from './HttpExceptions/5XX/InternalServerErrorHttpException';

/**
 * The server does not support the functionality required to fulfill the request.
 */
export { NotImplementedHttpException } from './HttpExceptions/5XX/NotImplementedHttpException';

/**
 * The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while 
 * attempting to fulfill the request.
 */
export { BadGatewayHttpException } from './HttpExceptions/5XX/BadGatewayHttpException';

/**
 * The server does not support, or refuses to support, the major version of HTTP that was used in the request message.
 */
export { HttpVersionNotSupportedHttpException } from './HttpExceptions/5XX/HttpVersionNotSupportedHttpException';

/**
 * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent 
 * content negotiation itself, and is therefore not a proper end point in the negotiation process.
 */
export { VariantAlsoNegotiatesHttpException } from './HttpExceptions/5XX/VariantAlsoNegotiatesHttpException';

/**
 * The method could not be performed on the resource because the server is unable to store the representation needed 
 * to successfully complete the request.
 */
export { InsufficientStorageHttpException } from './HttpExceptions/5XX/InsufficientStorageHttpException';

/**
 * The server terminated an operation because it encountered an infinite loop while processing a request with 
 * "Depth: infinity". This status indicates that the entire operation failed.
 */
export { LoopDetectedHttpException } from './HttpExceptions/5XX/LoopDetectedHttpException';

/**
 * The policy for accessing the resource has not been met in the request. The server should send back all the information 
 * necessary for the client to issue an extended request.
 */
export { NotExtendedHttpException } from './HttpExceptions/5XX/NotExtendedHttpException';

/**
 * The client needs to authenticate to gain network access.
 */
export { NetworkAuthenticationRequiredHttpException } from './HttpExceptions/5XX/NetworkAuthenticationRequiredHttpException';

/**
 * This status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network connect timeout behind 
 * the proxy to a client in front of the proxy.
 */
export { NetworkConnectTimeoutErrorHttpException } from './HttpExceptions/5XX/NetworkConnectTimeoutErrorHttpException';
