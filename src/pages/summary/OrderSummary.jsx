import React from 'react';

export default function OrderSummary() {
  const randomOrderID = 'ID' + Math.random().toString(16).slice(2);

  return (
    <div style={{ textAlign: 'center', margin: 50 }}>
      Thank you! Your Order ID is {randomOrderID};
      <div style={{ margin: 50 }}>
        <button
          onClick={() => {
            window.location.href = '/';
          }}
        >
          Return to order a new ice cream
        </button>
      </div>
    </div>
  );
}
