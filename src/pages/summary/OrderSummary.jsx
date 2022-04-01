import React, { useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useOrderDetails } from '../../contexts/OrderDetails';
import PreviousOrders from '../../contexts/PreviousOrders';

export default function OrderSummary() {
  const randomOrderID = 'ID' + Math.random().toString(16).slice(2);

  const customId = 'custom-id-yes';

  const orderPlacedToast = () => {
    toast('Your order was placed successfully', {
      toastId: customId,
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      type: 'success'
    });
  };

  useEffect(() => {
    orderPlacedToast();
    addOrdertoPrevOrder(orderDetails);
  });

  const [orderDetails] = useOrderDetails();

  const { addOrdertoPrevOrder } = useContext(PreviousOrders);

  return (
    <div style={{ textAlign: 'center', margin: 150 }}>
      <p>Thank you! Your Order ID is {randomOrderID}</p>
      <div style={{ margin: 50 }}>
        <button
          onClick={() => {
            window.location.href = '/';
          }}
        >
          Return to order a new ice cream
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
