import { generalResponseWrapper } from './general-response-wrapper';

describe('generalResponseWrapper function tests', () => {
  const defaultHeader = {
    'content-type': 'application/json',
  };

  it('should handle status code', () => {
    const result = generalResponseWrapper(200);
    expect(result).toEqual({
      statusCode: 200,
      body: '',
      headers: defaultHeader,
    });
  });

  it('should handle body if present', () => {
    const statusCode = 200;
    let body: Object = {};
    let result = generalResponseWrapper(statusCode, body);
    expect(result).toEqual({
      statusCode,
      body: '{}',
      headers: defaultHeader,
    });
    body = { another: 'body', params: '' };
    result = generalResponseWrapper(statusCode, body);
    expect(result).toEqual({
      statusCode,
      body: '{"another":"body","params":""}',
      headers: defaultHeader,
    });
  });

  it('should handle status header opts', () => {
    const headers = { custom: 'header' };
    const result = generalResponseWrapper(200, undefined, { headers });
    expect(result).toEqual({
      statusCode: 200,
      body: '',
      headers: {
        ...defaultHeader,
        custom: 'header',
      },
    });
  });

  it('should handle overwrite content-type', () => {
    const headers = { 'content-type': 'custom' };
    const result = generalResponseWrapper(200, undefined, { headers });
    expect(result).toEqual({
      statusCode: 200,
      body: '',
      headers: {
        'content-type': 'custom',
      },
    });
  });

  it('should handle isBase64Encoded', () => {
    let isBase64Encoded = true;
    let result = generalResponseWrapper(200, undefined, { isBase64Encoded });
    expect(result).toEqual({
      statusCode: 200,
      body: '',
      headers: defaultHeader,
      isBase64Encoded,
    });
    isBase64Encoded = false;
    result = generalResponseWrapper(200, undefined, { isBase64Encoded });
    expect(result).toEqual({
      statusCode: 200,
      body: '',
      headers: defaultHeader,
      isBase64Encoded,
    });
  });

  it('should handle isBase64Encoded', () => {
    const multiValueHeaders = { multiHeader: [2, 'a'] };
    const result = generalResponseWrapper(200, undefined, {
      multiValueHeaders,
    });
    expect(result).toEqual({
      statusCode: 200,
      body: '',
      headers: defaultHeader,
      multiValueHeaders,
    });
  });
});
