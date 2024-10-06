import { render, screen } from '@testing-library/react';
import App from './App';

test("Test First React app case",()=>{
  render(<App />);
  // const text = screen.getByText("First React Test Case");
  const text = screen.getByText(/First React Test Case/i);
  const text2 = screen.getByText('Khalid Mahmud');
  const title = screen.getByTitle('AI generated img');

  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(title).toBeInTheDocument();
})