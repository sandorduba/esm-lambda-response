# `lambda-response`

The goal is to have a minimalist lib to wrap AWS lambda responses.

# Installation

Using npm:

`npm install esm-lambda-response`

or yarn

`yarn add esm-lambda-response`

# Usage

```
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda';
import { httpResponse, notFound } from 'esm-lambda-response';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {  
  ...
  if (somethingNotFound) {
    return notFound('Something not found');
  }

  return httpResponse(200, { bodyParam: 'value' });
}
```
