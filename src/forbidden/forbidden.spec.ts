import { ErrorResponseTestBuilder } from '../test-utils/error-response.mock';
import { forbidden } from './forbidden';

const ertb = new ErrorResponseTestBuilder(forbidden, 403);
ertb.runTests();
