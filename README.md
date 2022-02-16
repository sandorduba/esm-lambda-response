# `lambda-response`

The goal is to have a minimalist lib to wrap AWS lambda responses.

All the functions generate for you an APIGatewayProxyResult from 'aws-lambda'.

For most cases you just have to pass the body to the function and everything will be wrapped for you.

By default `content-type` header is set to `application/json`, but you can overwrite it if you want in the opts.

# Installation

Using npm:

`npm install esm-lambda-response`

or yarn

`yarn add esm-lambda-response`

# Usage

## Standard usage example

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

## Advanced options

You can define your own headers if you want. It is easy:

```
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return httpResponse(200, undefined, {
    headers: {
      custom: 'header',
    },
  });
}
```
> Note: You can pass `undefined` as a body, in that case it will be converted to `{}`

## Contribution

TBD
