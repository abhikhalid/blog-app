import { fireEvent, render, screen, configure, within } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('on Change event testing', async () => {
  render(<App/>);

  const el = screen.getByRole('textbox');
  await userEvent.type(el, 'Khalid');
  expect(screen.getByText('Khalid')).toBeInTheDocument();
});