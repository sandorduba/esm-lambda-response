import { APIGatewayProxyResult } from 'aws-lambda';
import { generalResponseWrapper } from '../general-response-wrapper/general-response-wrapper';
import { ResponseOptions } from '../interfaces/response-options';

export const errorResponse = (
  statusCode: number,
  error?: string,
  opts?: ResponseOptions
): APIGatewayProxyResult => {
  return generalResponseWrapper(statusCode, error ? { error } : {}, opts);
};
