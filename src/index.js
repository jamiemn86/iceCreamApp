import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OrderDetailsProvider } from './contexts/OrderDetails';
import SummaryForm from './pages/summary/SummaryForm';
import OrderSummary from './pages/summary/OrderSummary';
import { PreviousOrdersProvider } from '../src/contexts/PreviousOrders';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <PreviousOrdersProvider>
        <OrderDetailsProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="summaryForm" element={<SummaryForm />} />
            <Route path="orderConfirmation" element={<OrderSummary />} />
          </Routes>
        </OrderDetailsProvider>
      </PreviousOrdersProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
