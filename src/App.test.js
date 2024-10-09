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
  // const div = screen.getByText((content, element) => content.startsWith('Hello'));
  // const div = screen.getByText((content, element) => content.endsWith('World'));
  // const div = screen.getByText((content, element) => content.endsWith('ld'));
  const div = screen.getByText((content, element) =>{
    return content.includes('ld');
  });
  
  expect(div).toBeInTheDocument();
}); 