import { fireEvent, render, screen, configure, within } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import User from './User';

test('Props Testing', () => {
  const name = 'khalid';

  render(<User name={name}/>);

  const user = screen.getByText(`User name : ${name}`);
  expect(user).toBeInTheDocument();
});