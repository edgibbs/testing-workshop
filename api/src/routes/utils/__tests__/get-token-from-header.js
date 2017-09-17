import getTokenFromHeader from '../get-token-from-header';

describe('#getTokenFromHeader', () => {
  describe('no authorization', () => {
    it('returns null', () => {
      const request = {headers: {}};
      expect(getTokenFromHeader(request)).toBeNull();
    });
  });

  describe('authorization but no token', () => {
    it('returns null', () => {
      const request = {headers: {authorization: 'Not a token'}};
      expect(getTokenFromHeader(request)).toBeNull();
    });
  });

  describe('authorization and valid token format', () => {
    it('returns null', () => {
      const request = {headers: {authorization: 'Token tokenValue'}};
      expect(getTokenFromHeader(request)).toEqual('tokenValue');
    });
  });
});
