import { ErrorResponseTestBuilder } from '../test-utils/error-response.mock';
import { conflict } from './conflict';

const ertb = new ErrorResponseTestBuilder(conflict, 409);
ertb.runTests();
