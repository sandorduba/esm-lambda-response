import { APIGatewayProxyResult } from "aws-lambda";
import { HttpResponse } from ".";

describe('HttpResponse function tests', () => {
  it('should exist', () => {
    expect(HttpResponse).toBeDefined();
  });

  it('should return the passed values', () => {
    const result: APIGatewayProxyResult = HttpResponse(200, { dummy: 'value' });
    expect(result).toStrictEqual({
      statusCode: 200,
      headers: {
        'content-type': 'application/json',
      },
      body: '{\"dummy\":\"value\"}',
    });
  });
});