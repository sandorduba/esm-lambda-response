import { ErrorResponseTestBuilder } from '../test-utils/error-response.mock';
import { notImplemented } from './not-implemented';

const ertb = new ErrorResponseTestBuilder(notImplemented, 501);
ertb.runTests();
