import { render } from '@testing-library/react';
import { Random } from './random';
describe('Random component', () => {
  it('renders the Random component', () => {
    const { baseElement } = render(<Random />);
    expect(baseElement).toBeDefined();
  });
});
