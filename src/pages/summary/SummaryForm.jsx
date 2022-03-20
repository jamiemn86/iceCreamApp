import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useOrderDetails } from '../../contexts/OrderDetails';
import { Link } from 'react-router-dom';

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);
  const [orderDetails] = useOrderDetails();

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: 'blue' }}> Terms and Conditions</span>
    </span>
  );

  return (
    <div>
      <div style={{ textAlign: 'center', margin: 50 }}>
        <div style={{ margin: 20 }}>
          <div>Your order details:</div>
          <div>Scoops: {orderDetails.totals.scoops}</div>
          <div>Toppings: {orderDetails.totals.toppings}</div>
          <div>Grand total: {orderDetails.totals.grandTotal}</div>
        </div>
      </div>
      <Form style={{ textAlign: 'center', margin: 50 }}>
        <Form.Group controlId="terms-and-conditions">
          <Form.Check
            type="checkbox"
            checked={tcChecked}
            onChange={(e) => setTcChecked(e.target.checked)}
            label={checkboxLabel}
          />
        </Form.Group>
        <Link to="/orderConfirmation">
          <Button
            variant="primary"
            type="submit"
            disabled={!tcChecked}
            name="primary"
          >
            Confirm order
          </Button>
        </Link>
      </Form>
    </div>
  );
}
