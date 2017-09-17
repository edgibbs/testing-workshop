import sum from '../sum';

describe('#sum', () => {
  describe('with no arguments', () => {
    it('returns 0', () => {
      expect(sum()).toEqual(0);
    });
  });

  describe('with 1 argument', () => {
    it('returns identy argument', () => {
      expect(sum(7)).toEqual(7);
    });
  });

  describe('with any number of arguents', () => {
    it('returns the sum', () => {
      expect(sum(1, 2, 3, 4)).toEqual(10);
    });
  });
});
