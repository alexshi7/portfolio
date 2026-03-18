import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about content', () => {
  render(<App />);
  expect(screen.getByText(/hi im alex shi/i)).toBeInTheDocument();
});
