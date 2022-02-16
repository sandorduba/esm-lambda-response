import { APIGatewayProxyResult } from 'aws-lambda';
import { errorResponse } from '../error-response/error-response';
import { ResponseOptions } from '../interfaces/response-options';

export const requestTimeout = (
  error?: string,
  opts?: ResponseOptions
): APIGatewayProxyResult => {
  return errorResponse(408, error, opts);
};
