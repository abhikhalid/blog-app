import { fireEvent, render, screen, configure } from '@testing-library/react';
import App from './App';

test('test input', () => { 
  render(<App />);
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue(); //check if value exists or not
  expect(input).toHaveValue('hello');
  expect(input).toBeEnabled();
  expect(input).toHaveAttribute('id');
  expect(input).toHaveAttribute('data-test');
  expect(input).toHaveClass("test-style");
  expect(input).toHaveClass("dummy");
});

test('test negative cases',() => {
  render(<App />);
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveClass('btn');
  // expect(btn).not.toHaveClass('btn');
  expect(btn).toHaveAttribute('id');
  expect(btn).toBeEnabled();
});