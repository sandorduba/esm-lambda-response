import {
  mockResult,
  mockGeneralResponseWrapper,
} from '../test-utils/general-response-wrapper.mock';
import { errorResponse } from './error-response';

describe('error response function tests', () => {
  it('should work by only specifying the statusCode', () => {
    const statusCode = 5000;
    const result = errorResponse(5000);
    expect(mockGeneralResponseWrapper).toHaveBeenCalledWith(
      statusCode,
      {},
      undefined
    );
    expect(result).toBe(mockResult);
  });

  it('should ignore body if it is undefined', () => {
    const statusCode = 5000;
    errorResponse(statusCode, undefined);
    expect(mockGeneralResponseWrapper).toHaveBeenCalledWith(
      statusCode,
      {},
      undefined
    );
  });

  it('should ignore empty string', () => {
    const statusCode = 5000;
    errorResponse(statusCode, '');
    expect(mockGeneralResponseWrapper).toHaveBeenCalledWith(
      statusCode,
      {},
      undefined
    );
  });

  it('should send error if specified', () => {
    const statusCode = 5000;
    const error = 'custom error message';
    errorResponse(statusCode, error);
    expect(mockGeneralResponseWrapper).toHaveBeenCalledWith(
      statusCode,
      { error },
      undefined
    );
  });

  it('should send options if present', () => {
    const statusCode = 5000;
    const opts = { custom: 'options' };
    errorResponse(statusCode, undefined, opts as any);
    expect(mockGeneralResponseWrapper).toHaveBeenCalledWith(
      statusCode,
      {},
      opts
    );
  });
});
