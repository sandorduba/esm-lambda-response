import { ErrorResponseTestBuilder } from '../test-utils/error-response.mock';
import { serviceUnavailable } from './service-unavailable';

const ertb = new ErrorResponseTestBuilder(serviceUnavailable, 503);
ertb.runTests();
