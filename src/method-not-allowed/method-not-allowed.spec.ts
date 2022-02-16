import { ErrorResponseTestBuilder } from '../test-utils/error-response.mock';
import { methodNotAllowed } from './method-not-allowed';

const ertb = new ErrorResponseTestBuilder(methodNotAllowed, 405);
ertb.runTests();
