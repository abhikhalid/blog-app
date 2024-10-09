import { fireEvent, render, screen, configure, within } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Click event with user event library', async () => {
  // render(<App />);
  // const button = screen.getByRole('button');
  // const heading = screen.getByRole('heading');
  // expect(heading).toHaveTextContent('');
  // fireEvent.click(button);
  // expect(heading).toHaveTextContent('hello');

  userEvent.setup();
  render(<App />);

  const btn = screen.getByText('Click me');

  await userEvent.click(btn);
  expect(screen.getByText('hello')).toBeInTheDocument();
});