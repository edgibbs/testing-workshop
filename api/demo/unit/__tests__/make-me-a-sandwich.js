import makeMeASandwich from '../make-me-a-sandwich';

describe('#makeMeASandwich', () => {
  describe('when sandwich is not a string', () => {
    it('returns the sandwich', () => {
      expect(makeMeASandwich({query: {}})).toBeNull();
    });
  });

  describe('when sandwich is a string', () => {
    it('returns the sandwich', () => {
      expect(makeMeASandwich({query: {sandwich: 'Monte Cristo'}})).toEqual(
        'Monte Cristo'
      );
    });
  });
});
