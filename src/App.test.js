import { fireEvent, render, screen, configure } from '@testing-library/react';
import App from './App';

test('text match with string',()=>{
  render(<App />);
  // const div = screen.getByText('Hello World', {exact: false});
  // const div = screen.getByText('Hello world', {exact: false});
  const div = screen.getByText('hello', {exact: false});
  expect(div).toBeInTheDocument();
});

test('text match with regex',()=>{
  render(<App />);
  // const div = screen.getByText(/Hello World/i);
  // const div = screen.getByText(/Hello world/i);
  // const div = screen.getByText(/lo Wo/i);
  // const div = screen.getByText(/hello/i);
  const div = screen.getByText(/Hello w?orld/i); //w na thakle o somossa nai
  expect(div).toBeInTheDocument();
}); 