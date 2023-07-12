import { screen } from '@testing-library/dom';
import { init } from '.';

describe('Index', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  });

  it('should render a greeting', () => {
    init();
    expect(screen.getByRole('heading', { name: 'Hello!' })).toBeInTheDocument();
  });

  it('should render the sum of 3 plus 5', () => {
    init();
    expect(screen.getByText(8)).toBeInTheDocument();
  });
});
