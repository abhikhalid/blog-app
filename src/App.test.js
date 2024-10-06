import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import cleandb from './service';

// beforeAll(() => {
//   console.log(`***** before all hook *****`);
// });


beforeEach(() => {
  // console.log(`***** before each hook *****`);
  cleandb();
});


test('click event test case 1', () => {
  console.log("1");

  render(<App />);

  const btn = screen.getByRole("button");
  fireEvent.click(btn);

  expect(screen.getByText('updated data')).toBeInTheDocument();
});

test('click event test case 2', () => {
  console.log("2");

  render(<App />);

  const btn = screen.getByRole("button");
  fireEvent.click(btn);

  expect(screen.getByText('updated data')).toBeInTheDocument();
});

test('click event test case 3', () => {
  console.log("3");

  render(<App />);

  const btn = screen.getByRole("button");
  fireEvent.click(btn);

  expect(screen.getByText('updated data')).toBeInTheDocument();
});

// afterAll(() => {
//   console.log("____________ after all ________");
// })

afterEach(() => {
  console.log(`______ after each _____`);
});