import { ErrorResponseTestBuilder } from '../test-utils/error-response.mock';
import { badGateway } from './bad-gateway';

const ertb = new ErrorResponseTestBuilder(badGateway, 502);
ertb.runTests();
