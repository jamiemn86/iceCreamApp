import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from 'react-bootstrap';
import SummaryForm from '../SummaryForm';

test('Button is disabled by default', () => {
  render(<SummaryForm />);
  const summaryButton = screen.getByRole('button');
  expect(summaryButton).toBeInTheDocument();
  expect(summaryButton).toBeDisabled();
});

test('Checkbox is unchecked by default', () => {
  render(<SummaryForm />);
  const summaryCheckbox = screen.getByRole('checkbox');
  expect(summaryCheckbox).toBeInTheDocument();
  expect(summaryCheckbox).not.toBeChecked();
});

test('When checkbox is checked, button becomes enabled', () => {
  render(<SummaryForm />);
  const summaryButton = screen.getByRole('button');
  const summaryCheckbox = screen.getByRole('checkbox');
  fireEvent.click(summaryCheckbox);
  expect(summaryButton).toBeEnabled();
});

test('When checkbox is checked and then unchecked, button becomes disabled again', () => {
  render(<SummaryForm />);
  const summaryButton = screen.getByRole('button');
  const summaryCheckbox = screen.getByRole('checkbox');
  fireEvent.click(summaryCheckbox);
  expect(summaryButton).toBeEnabled();
  fireEvent.click(summaryCheckbox);
  expect(summaryButton).toBeDisabled();
});
