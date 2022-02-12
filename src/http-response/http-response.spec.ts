import {
  mockGeneralResponseWrapper,
  mockResult,
} from '../test-utils/general-response-wrapper.mock';
import { httpResponse } from './http-response';

describe('httpResponse function tests', () => {
  it('should pass status code to general response wrapper', () => {
    const statusCode = 200;
    const result = httpResponse(statusCode, {});
    expect(mockGeneralResponseWrapper).toHaveBeenCalledWith(
      statusCode,
      {},
      undefined
    );
    expect(result).toEqual(mockResult);
  });

  it('should pass opts as well', () => {
    const statusCode = 200;
    const opts = { random: 'opts' };
    httpResponse(statusCode, {}, opts as any);
    expect(mockGeneralResponseWrapper).toHaveBeenCalledWith(
      statusCode,
      {},
      opts
    );
  });

  it('should pass the body params', () => {
    const statusCode = 200;
    const body = { random: 'opts' };
    httpResponse(statusCode, body);
    expect(mockGeneralResponseWrapper).toHaveBeenCalledWith(
      statusCode,
      body,
      undefined
    );
  });
});
