export const mockResult = 'mockErrorResponse';
export const mockErrorResponse = jest.fn().mockReturnValue(mockResult);

jest.mock('../error-response/error-response', () => ({
  errorResponse: mockErrorResponse,
}));

export class ErrorResponseTestBuilder {
  private fn: Function;

  private statusCode: number;

  constructor(fn: Function, statusCode: number) {
    this.fn = fn;
    this.statusCode = statusCode;
  }

  runTests(): void {
    describe(`${this.fn.name} function tests`, () => {
      it('should provide arguments and use 502 statusCode', () => {
        const error = 'bad gateway error message example';
        const result = this.fn(error);
        expect(mockErrorResponse).toHaveBeenCalledWith(
          this.statusCode,
          error,
          undefined
        );
        expect(result).toEqual(mockResult);
      });

      it('should provide opts if specified', () => {
        const error = 'bad gateway error message example';
        const opts = { headers: { custom: 'header' } };
        const result = this.fn(error, opts);
        expect(mockErrorResponse).toHaveBeenCalledWith(
          this.statusCode,
          error,
          opts
        );
        expect(result).toEqual(mockResult);
      });
    });
  }
}
