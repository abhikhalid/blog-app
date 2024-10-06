import { fireEvent, render, screen, configure } from '@testing-library/react';
import App from './App';

// test('testing with display value', () => {
//   render(<App />);

//   const input = screen.getByDisplayValue('khalid');

//   expect(input).toBeInTheDocument();
// });

test('testing with display value', () => {
  render(<App />);
  const input = screen.getAllByDisplayValue('khalid');
  
  for (let i = 0; i < input.length; i++){
    expect(input[i]).toBeInTheDocument();
  }
})

test('textarea testing with display value', () => {
  render(<App />);

  const textarea = screen.getByDisplayValue('khalid mahmud');

  expect(textarea).toBeInTheDocument();
});

test('radio testing with display value', () => {
  render(<App />);
  const radio = screen.getByDisplayValue('male');
  expect(radio).toBeInTheDocument();
})