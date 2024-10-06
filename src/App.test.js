import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('single Button testing', () => { 
  render(<App />);
  
  const btn = screen.getByText('Login');

  expect(btn).toBeInTheDocument();
})
 
test('single p tag testing', () => {
  render(<App />);

  const pTag = screen.getByText('P tag testing');

  expect(pTag).toBeInTheDocument();
  expect(pTag).toHaveClass('paraStyle');
  expect(pTag).toHaveAttribute('id');
});

// test('single h1 tag testing', () => { 
//   render(<App />);
//   const h1Tag = screen.getByText('Heading Tag');
//   expect(h1Tag).toBeInTheDocument();
//  })

test('multiple h1 tag testing', () => {
  render(<App />);
  const h1Tag = screen.getAllByText('Heading Tag');

  for (let i = 0; i < h1Tag.length; i++) {
    const element = h1Tag[i];
    expect(element).toBeInTheDocument();
  }
})