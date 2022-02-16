import { ErrorResponseTestBuilder } from '../test-utils/error-response.mock';
import { requestTimeout } from './request-timeout';

const ertb = new ErrorResponseTestBuilder(requestTimeout, 408);
ertb.runTests();
