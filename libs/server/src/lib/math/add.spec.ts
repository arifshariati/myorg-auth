import { add } from './add';
describe('add', () => {
  const num1 = 10;
  const num2 = 2;
  it('adds numbers', () => {
    expect(add(num1, num2)).toBe(12);
  });
});
