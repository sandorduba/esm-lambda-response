import { ErrorResponseTestBuilder } from '../test-utils/error-response.mock';
import { gone } from './gone';

const ertb = new ErrorResponseTestBuilder(gone, 410);
ertb.runTests();
