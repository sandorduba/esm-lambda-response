import { APIGatewayProxyResult } from 'aws-lambda';
import { errorResponse } from '../error-response/error-response';
import { ResponseOptions } from '../interfaces/response-options';

export const notFound = (
  error?: string,
  opts?: ResponseOptions
): APIGatewayProxyResult => {
  return errorResponse(404, error, opts);
};
