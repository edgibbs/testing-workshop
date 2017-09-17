// Things to know:
// - The `toEqual` assertion does a "deep" equality check.
//   This means you can verify that two objects are effectively
//   the same because they have the same primative values.
//   For example:
//     `expect({a: 'b'}).toEqual({a: 'b'})`
//   Learn more: https://facebook.github.io/jest/docs/expect.html#toequalvalue
//
// You're going to develop a new utility function called `arrayify`
// using Test Driven Development!
// You'll write this function in `api/src/routes/utils/arrayify.js`
//
// Requirements: accepts a single argument and returns an array
// of that argument. If the given argument is already an array,
// just return the argument. If it's given nothing, return an empty array.
//
// **Remember** to write a simple test to cover a simple use case. Then
// write code to make that test pass. Then refactor your code to clean
// it up if needed. Then continue the cycle until you cover all use cases.
import arrayify from '../arrayify';

describe('arrayify', () => {
  describe('when passing nothing', () => {
    it('returns an empty array', () => {
      expect(arrayify()).toEqual([]);
    });
  });

  describe('when passing a single argument', () => {
    it('returns an array with the argument', () => {
      expect(arrayify('hi')).toEqual(['hi']);
    });
  });

  describe('when passing an array', () => {
    it('returns an array with the argument', () => {
      expect(arrayify([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });
});
