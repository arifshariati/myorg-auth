import { whoami } from './whoami';
describe('whoami', () => {
  it('should return correct output', () => {
    expect(whoami()).toBe('I am server 🔥');
  });
});
