import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShoppingPage from './store/shoppingcart/Shoppingpage'
import reportWebVitals from './reportWebVitals';
import OrderConfirmationPage from "./store/orderconfirmation/Orderconfirmationpage"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ShoppingPage />} />
      <Route path="order" element={<OrderConfirmationPage />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
