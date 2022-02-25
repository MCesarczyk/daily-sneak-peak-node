import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders "Welcome to:" paragraph', () => {
    render(<Home />);
    const paragraph = screen.getByText(/Welcome to:/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('fetches successfully data from an API', async () => {
    const state = "Teacher's assistant!";
  });
});
