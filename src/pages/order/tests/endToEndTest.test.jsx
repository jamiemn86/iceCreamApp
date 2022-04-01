import {
  render,
  screen,
  fireEvent
} from '../../../test-utils/testing-library-utils';
import ConfirmationButton from '../../entry/ConfirmationButton';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Options from '../../entry/Options';
import SummaryForm from '../../summary/SummaryForm';

test('update chocolate scoops to 4 and check subtotal is $8', async () => {
  render(<Options optionType="scoops" />);

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

  const grandTotal = screen.getByText('Grand total: $', { exact: false });

  expect(grandTotal).toHaveTextContent('0.00');
});

test('check that proceed button appears', async () => {
  render(
    <Router>
      <ConfirmationButton />
    </Router>
  );

  const proceedButton = screen.getByText('Proceed to order summary page');
  expect(proceedButton).toBeInTheDocument();
});

test('check that the proceed button can be clicked and links to the correct page', async () => {
  render(
    <Router>
      <ConfirmationButton />
    </Router>
  );

  const proceedButton = screen.getByText('Proceed to order summary page');
  expect(proceedButton).toBeInTheDocument();
  fireEvent.click(proceedButton);
  expect(screen.getByRole('link')).toHaveAttribute('href', '/summaryForm');
});

test('check that the proceed button is not enabled when the grand total is $0', async () => {
  render(
    <Router>
      <ConfirmationButton />
    </Router>
  );

  const proceedButton = screen.getByText('Proceed to order summary page');
  expect(proceedButton).toBeInTheDocument();
  expect(proceedButton).toBeDisabled();
});

test('check that terms and conditions line appears', () => {
  render(
    <Router>
      <SummaryForm />
    </Router>
  );
  const termsAndConditions = screen.getByText('Terms and Conditions');
  expect(termsAndConditions).toBeInTheDocument();
});
