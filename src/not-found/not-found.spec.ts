import { ErrorResponseTestBuilder } from '../test-utils/error-response.mock';
import { notFound } from './not-found';

const ertb = new ErrorResponseTestBuilder(notFound, 404);
ertb.runTests();
