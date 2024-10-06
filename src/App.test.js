import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


// test('test case for single input field', () => {
//   render(<App />);
//   const input = screen.getByPlaceholderText('enter username');

//   expect(input).toBeInTheDocument();
// });


test('test case for multiple input fields', () => {
  render(<App />);
  const inputs = screen.getAllByPlaceholderText('enter username');

  for (let i = 0; i < inputs.length; i++){
    expect(inputs[i]).toBeInTheDocument();
    expect(inputs[i]).toHaveValue('khalid');
  }
})