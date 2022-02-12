import { APIGatewayProxyResult } from 'aws-lambda';
import { generalResponseWrapper } from '../general-response-wrapper/general-response-wrapper';
import { ResponseOptions } from '../interfaces/response-options';

export const httpResponse = (
  statusCode: number,
  body?: Object,
  opts?: ResponseOptions
): APIGatewayProxyResult => generalResponseWrapper(statusCode, body, opts);
