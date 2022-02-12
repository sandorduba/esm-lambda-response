import { APIGatewayProxyResult } from 'aws-lambda';
import { generalResponseWrapper } from '../general-response-wrapper/general-response-wrapper';
import { ResponseOptions } from '../interfaces/response-options';

export const notFound = (
  error?: string,
  opts?: ResponseOptions
): APIGatewayProxyResult => {
  return generalResponseWrapper(404, error ? { error } : {}, opts);
};
