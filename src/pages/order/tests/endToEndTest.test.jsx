import { render, screen } from '../../../test-utils/testing-library-utils';
import ConfirmationButton from '../../entry/ConfirmationButton';

test('check that proceed button appears', async () => {
  render(<ConfirmationButton />);

  // check that your order details appears
  const proceedButton = screen.getByRole('button');
  expect(proceedButton).toBeInTheDocument();
});
