import {
  render,
  screen,
  fireEvent,
  waitFor
} from '../../../test-utils/testing-library-utils';
import ConfirmationButton from '../../entry/ConfirmationButton';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Options from '../../entry/Options';
import OrderSummary from '../../summary/OrderSummary';

test('update chocolate scoops to 4 and check subtotal is $8', async () => {
  render(<Options optionType="scoops" />);

  // update chocolate scoops to 4 and check subtotal is $8
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });

  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate'
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '4');
  expect(scoopsSubtotal).toHaveTextContent('8.00');
});

test('check that the grand total is initially set to $0.00', async () => {
  render(
    <Router>
      <ConfirmationButton />
    </Router>
  );

  // check that the grand total is initially set to $0.00
  const grandTotal = screen.getByText('Grand total: $', { exact: false });

  expect(grandTotal).toHaveTextContent('0.00');
});

test('check that proceed button appears', async () => {
  render(
    <Router>
      <ConfirmationButton />
    </Router>
  );

  // check that proceed button appears
  const proceedButton = screen.getByText('Proceed to order summary page');
  expect(proceedButton).toBeInTheDocument();
});

test('check that the proceed button can be clicked and leads to a new page', async () => {
  render(
    <Router>
      <ConfirmationButton />
    </Router>
  );

  // check that proceed button can be click is linking correctly
  const proceedButton = screen.getByText('Proceed to order summary page');
  expect(proceedButton).toBeInTheDocument();
  fireEvent.click(proceedButton);
  expect(screen.getByRole('link')).toHaveAttribute('href', '/summaryForm');
});
