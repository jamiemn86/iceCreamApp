import { createContext, useState } from 'react';

const PreviousOrders = createContext();

export const PreviousOrdersProvider = ({ children }) => {
  const [prevOrder, setPrevOrder] = useState('');

  const addOrdertoPrevOrder = (order) => {
    setPrevOrder(order);
  };

  return (
    <PreviousOrders.Provider value={{ prevOrder, addOrdertoPrevOrder }}>
      {children}
    </PreviousOrders.Provider>
  );
};

export default PreviousOrders;
