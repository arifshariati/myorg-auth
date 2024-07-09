import { subtract } from './subtract';
describe('subtract', () => {
  const num1 = 10;
  const num2 = 2;
  it('subtracts numbers', () => {
    expect(subtract(num1, num2)).toBe(8);
  });
});
