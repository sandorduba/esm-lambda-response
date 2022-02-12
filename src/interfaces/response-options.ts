import { APIGatewayProxyResult } from 'aws-lambda';

export type ResponseOptions = Pick<
  APIGatewayProxyResult,
  'headers' | 'multiValueHeaders' | 'isBase64Encoded'
>;
