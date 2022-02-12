import {
  mockResult,
  mockGeneralResponseWrapper,
} from '../test-utils/general-response-wrapper.mock';
import { notFound } from './not-found';

describe('notFound function tests', () => {
  it('should work without function parameters', () => {
    const result = notFound();
    expect(mockGeneralResponseWrapper).toHaveBeenCalledWith(404, {}, undefined);
    expect(result).toBe(mockResult);
  });

  it('should ignore body if it is undefined', () => {
    notFound(undefined);
    expect(mockGeneralResponseWrapper).toHaveBeenCalledWith(404, {}, undefined);
  });

  it('should ignore empty string', () => {
    notFound('');
    expect(mockGeneralResponseWrapper).toHaveBeenCalledWith(404, {}, undefined);
  });

  it('should send error if specified', () => {
    const error = 'custom error message';
    notFound('custom error message');
    expect(mockGeneralResponseWrapper).toHaveBeenCalledWith(
      404,
      { error },
      undefined
    );
  });

  it('should send options if present', () => {
    const opts = { custom: 'options' };
    notFound(undefined, opts as any);
    expect(mockGeneralResponseWrapper).toHaveBeenCalledWith(404, {}, opts);
  });
});
