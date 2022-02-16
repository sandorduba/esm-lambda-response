import { ErrorResponseTestBuilder } from '../test-utils/error-response.mock';
import { internalServerError } from './internal-server-error';

const ertb = new ErrorResponseTestBuilder(internalServerError, 500);
ertb.runTests();
