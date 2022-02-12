export const mockResult = 'mockResponse';
export const mockGeneralResponseWrapper = jest.fn().mockReturnValue(mockResult);

jest.mock('../general-response-wrapper/general-response-wrapper', () => ({
  generalResponseWrapper: mockGeneralResponseWrapper,
}));
