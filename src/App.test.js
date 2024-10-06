import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('input test case', () => {
  render(<App />);

  const inputs = screen.getAllByLabelText('UserName');
  // expect(inputs[0]).toBeInTheDocument();

  for (let i = 0; i < inputs.length; i++){
    expect(inputs[i]).toBeInTheDocument();
    expect(inputs[i]).toHaveValue('khalid');
  }
});


test('checkbox test case', () => {
  render(<App />);

  const checkboxs = screen.getAllByLabelText('Skills');
  // expect(inputs[0]).toBeInTheDocument();

  for (let i = 0; i < checkboxs.length; i++) {
    expect(checkboxs[i]).toBeInTheDocument();
    expect(checkboxs[i]).toBeChecked();
  }
});