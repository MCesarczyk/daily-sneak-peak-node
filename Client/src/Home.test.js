import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders "Welcome to:" paragraph', () => {
    render(<Home />);
    const paragraph = screen.getByText(/Welcome to:/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders app name from backend', ()=>{
    render(<Home />);
    const hero = screen.getByTestId("hero");
    expect(hero).toBeInTheDocument();
  });
});
