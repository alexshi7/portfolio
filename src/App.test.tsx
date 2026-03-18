import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about content', () => {
  render(<App />);
  expect(screen.getByText(/Alex Shi 史润康/i)).toBeInTheDocument();
});
