import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import { OrderDetailsProvider } from '../../../contexts/OrderDetails';
import { MemoryRouter as Router } from 'react-router-dom';

test('Button is disabled by default', () => {
  render(
    <Router>
      <OrderDetailsProvider>
        <SummaryForm />
      </OrderDetailsProvider>
    </Router>
  );
  const summaryButton = screen.getByRole('button');
  expect(summaryButton).toBeInTheDocument();
  expect(summaryButton).toBeDisabled();
});

test('Checkbox is unchecked by default', () => {
  render(
    <Router>
      <OrderDetailsProvider>
        <SummaryForm />
      </OrderDetailsProvider>
    </Router>
  );
  const summaryCheckbox = screen.getByRole('checkbox');
  expect(summaryCheckbox).toBeInTheDocument();
  expect(summaryCheckbox).not.toBeChecked();
});

test('When checkbox is checked, button becomes enabled', () => {
  render(
    <Router>
      <OrderDetailsProvider>
        <SummaryForm />
      </OrderDetailsProvider>
    </Router>
  );
  const summaryButton = screen.getByRole('button');
  const summaryCheckbox = screen.getByRole('checkbox');
  fireEvent.click(summaryCheckbox);
  expect(summaryButton).toBeEnabled();
});

test('When checkbox is checked and then unchecked, button becomes disabled again', () => {
  render(
    <Router>
      <OrderDetailsProvider>
        <SummaryForm />
      </OrderDetailsProvider>
    </Router>
  );
  const summaryButton = screen.getByRole('button');
  const summaryCheckbox = screen.getByRole('checkbox');
  fireEvent.click(summaryCheckbox);
  expect(summaryButton).toBeEnabled();
  fireEvent.click(summaryCheckbox);
  expect(summaryButton).toBeDisabled();
});
