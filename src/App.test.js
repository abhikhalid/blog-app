import { fireEvent, render, screen, configure, within } from '@testing-library/react';
import App from './App';

test('Test with within function',()=>{
  render(<App />);
  let el = screen.getByText('Hello World');
  expect(el).toBeInTheDocument();

  let subEl =  within(el).getByText('hi');
  let subEl2 =  within(el).getByText('hello');
  let subEl3 =  within(el).getByText('hey');
  expect(subEl).toBeInTheDocument();
});