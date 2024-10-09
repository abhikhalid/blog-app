import { fireEvent, render, screen, configure } from '@testing-library/react';
import App from './App';

test('test element with find by',async ()=>{
  render(<App />);
  const element = await screen.findByText('data found',{}, {timeout: 4000});
  expect(element).toBeInTheDocument();
});