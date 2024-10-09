import { fireEvent, render, screen, configure, within, prettyDOM, logRoles } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import User from './User';

test('testing',()=>{
  render(<App/>);

  const el = screen.getByRole('button', {
    name: /click to increase: 0/i
  });

  expect(el).toBeInTheDocument();
})