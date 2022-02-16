import { ErrorResponseTestBuilder } from '../test-utils/error-response.mock';
import { unauthorized } from './unauthorized';

const ertb = new ErrorResponseTestBuilder(unauthorized, 401);
ertb.runTests();
