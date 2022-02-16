import { ErrorResponseTestBuilder } from '../test-utils/error-response.mock';
import { notAcceptable } from './not-acceptable';

const ertb = new ErrorResponseTestBuilder(notAcceptable, 406);
ertb.runTests();
