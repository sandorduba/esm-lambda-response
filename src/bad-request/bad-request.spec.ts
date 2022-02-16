import { ErrorResponseTestBuilder } from '../test-utils/error-response.mock';
import { badRequest } from './bad-request';

const ertb = new ErrorResponseTestBuilder(badRequest, 400);
ertb.runTests();
