import { APIGatewayProxyResult } from 'aws-lambda';
import { errorResponse } from '../error-response/error-response';
import { ResponseOptions } from '../interfaces/response-options';

export const unauthorized = (
  error?: string,
  opts?: ResponseOptions
): APIGatewayProxyResult => {
  return errorResponse(401, error, opts);
};
