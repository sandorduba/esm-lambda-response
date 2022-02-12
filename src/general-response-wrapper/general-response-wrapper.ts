import { APIGatewayProxyResult } from 'aws-lambda';
import { ResponseOptions } from '../interfaces/response-options';

export const generalResponseWrapper = (
  statusCode: number,
  body?: Object,
  opts?: ResponseOptions
): APIGatewayProxyResult => {
  const bodyString = body ? JSON.stringify(body) : '';
  const resp: APIGatewayProxyResult = {
    statusCode,
    headers: {
      'content-type': 'application/json',
      ...(opts?.headers || {}),
    },
    body: bodyString,
    isBase64Encoded: opts?.isBase64Encoded,
    multiValueHeaders: opts?.multiValueHeaders,
  };
  if (resp.isBase64Encoded === undefined) delete resp.isBase64Encoded;
  if (resp.multiValueHeaders === undefined) delete resp.multiValueHeaders;
  return resp;
};
