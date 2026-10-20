import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio and its main sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /thoughtful work/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /a few things/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /résumé/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /hello@example.com/i })).toBeInTheDocument();
});
