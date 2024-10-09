import { fireEvent, render, screen, configure } from '@testing-library/react';
import App from './App';

test('queryBy test Case ', () => { 
  render(<App />);
  // const dv = screen.getByText('Login');
  const dv = screen.queryByText('Login'); //code e login thakbe but ui te thakbe na
  expect(dv).not.toBeInTheDocument(); // code e login thakbe but ui te thakbe na
});