import { fireEvent, render, screen, configure, within, prettyDOM, logRoles } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import User from './User';

test('testing component', () => {
  // render(<App />);
  // const el = screen.getByText('Heading 2');
  // expect(el).toBeInTheDocument();

  const {container, debug} = render(<App />);

  //option 1

  // console.log(container) 

  //option 2
  // console.log(prettyDOM(container));

  //option 3
  // debug();
 
  //option 4 (not working, see doc.)
  // DEBUG_PRINT_DOM(container,1000);  

  logRoles(container);
});