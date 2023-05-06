import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { Greeting } from './Greeting';

describe('Greeting tests', () => {
  it('should render Greeting with a name', () => {
    render(<Greeting name='Diego'/>);
    const text = screen.getByText(/diego/i)
    expect(text).toBeInTheDocument();
  });

  it('should render Greeting without a name', ()=> {
    render(<Greeting />);
    const text = screen.getByText(/guest/i);
    expect(text).toBeInTheDocument();
  })
});
