import { fireEvent, render, screen, configure } from '@testing-library/react';
import App from './App';

// test('test image element with alt text', () => { 
//   render(<App />);
//   const imgElement = screen.getByAltText('black spade suit');
//   expect(imgElement).toBeInTheDocument();
//  })

test('test image element with alt text', () => { 
  render(<App />);
  const img = screen.getAllByAltText('black spade suit');
  
  for (let i = 0; i < img.length; i++) {
    expect(img[i]).toBeInTheDocument();
  }
 })