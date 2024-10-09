import { fireEvent, render, screen, configure, within } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import User from './User';

test('functional props testing', async () => {
  // const testFunction = jest.fn();

  // render(<App testFunction={testFunction} />);

  // fireEvent.click(screen.getByRole('button'));
  // expect(testFunction).toHaveBeenCalled();

  const testFunction = jest.fn();
  render(<App testFunction={testFunction} />);

  const btn = screen.getByRole('button');
  await userEvent.click(btn);
  expect(testFunction).toHaveBeenCalled();
});