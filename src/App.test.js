import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('get by role', () => {
  render(<App />);

  const inputField = screen.getByRole('textbox');
  const button = screen.getByRole('button');
  
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveValue('hello');
  expect(inputField).toBeDisabled();
  expect(button).toBeInTheDocument();
});

