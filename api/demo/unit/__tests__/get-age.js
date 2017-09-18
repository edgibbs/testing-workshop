import getAge from '../get-age';

describe('#getAge', () => {
  it('returns null if the person has no age', () => {
    const person = {};
    const result = getAge(person);
    expect(result).toBe(null);
  });

  it("can get a person's age", () => {
    const age = 23;
    const person = {age};
    const result = getAge(person);
    expect(result).toBe(age);
  });

  it("returns 0 if the person's age is zero", () => {
    const age = 0;
    const person = {age};
    const result = getAge(person);
    expect(result).toBe(age);
  });
});
