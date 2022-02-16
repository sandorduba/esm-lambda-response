import { APIGatewayProxyResult } from 'aws-lambda';
import { errorResponse } from '../error-response/error-response';
import { ResponseOptions } from '../interfaces/response-options';

export const notAcceptable = (
  error?: string,
  opts?: ResponseOptions
): APIGatewayProxyResult => {
  return errorResponse(406, error, opts);
};
