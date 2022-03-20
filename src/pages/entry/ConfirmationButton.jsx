import React from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import { useOrderDetails } from '../../contexts/OrderDetails';
import { Link } from 'react-router-dom';

export default function ConfirmationButton() {
  const [orderDetails] = useOrderDetails();

  return (
    <div style={{ textAlign: 'center', margin: 50 }}>
      <div style={{ margin: 20 }}>
        <div>Your order details:</div>
        <div>Scoops: {orderDetails.totals.scoops}</div>
        <div>Toppings: {orderDetails.totals.toppings}</div>
        <div>Grand total: {orderDetails.totals.grandTotal}</div>
      </div>
      <Link to="/summaryForm">
        <button type="button">Proceed to order summary page</button>
      </Link>
      <Confirm />
    </div>
  );
}
