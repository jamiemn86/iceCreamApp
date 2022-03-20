import { render, screen } from '../../../test-utils/testing-library-utils';
import ConfirmationButton from '../../entry/ConfirmationButton';
import { MemoryRouter as Router } from 'react-router-dom';

test('check that proceed button appears', async () => {
  render(<Router><ConfirmationButton /></Router>);

  // check that proceed button appears
  const proceedButton = screen.getByText(
    'Proceed to order summary page'
  );
  expect(proceedButton).toBeInTheDocument();
});
