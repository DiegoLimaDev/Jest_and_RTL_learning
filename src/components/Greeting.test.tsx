import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { Greeting } from './Greeting';

describe('Greeting tests', () => {
  it('should render Greeting without name', () => {
    render(<Greeting name='Diego'/>);
    const text = screen.getByText(/diego/i)
    expect(text).toBeInTheDocument();
  });
});
