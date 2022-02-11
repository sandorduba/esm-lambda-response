import { APIGatewayProxyEventHeaders, APIGatewayProxyResult } from 'aws-lambda';

export const HttpResponse = (
  statusCode: number,
  body: Object,
  opts?: {
    headers: APIGatewayProxyEventHeaders;
  }
): APIGatewayProxyResult => ({
  statusCode,
  headers: {
    'content-type': 'application/json',
    ...(opts?.headers || {}),
  },
  body: JSON.stringify(body),
});
