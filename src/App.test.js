import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('getByLabelText test case 1', () => {
  render(<App />);
  const input = screen.getByLabelText('Username');
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue('khalid');
});


test('getByLabelText test case 2', () => {
  render(<App />);
  const input = screen.getByLabelText('Skills');
  expect(input).toBeInTheDocument();
  expect(input).toBeChecked();
});