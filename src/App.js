import './App.css';

import CartItems from './components/CartItems';
import CartFees from './components/CartFees';
import { ESTIMATED_DELIVERY } from './data';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './context/State';

import getLineItems from './api/lineItems';
import PostalCode from './components/PostalCode';

function App() {
    

  const [lineItems, setLineItems] = useState([]);
  const [fees, setFees] = useState([]);

  const { items, addItem } = useContext(GlobalContext);

  useEffect(() => {
    getLineItems().then(data => {
      data.forEach(lineItem => {
        addItem(lineItem);
      }
      );
    });
  }, []);

  useEffect(() => {
    setLineItems(items);
  }, [items]);

  console.log(lineItems);

  const subtotal = lineItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  useEffect(() =>{
    const calculateFees = (subtotal) => {
      const HST = 0.13;
      const SHIPPING = 15;
      const fees = {
        subtotal: subtotal,
        hst: (subtotal * HST).toFixed(2),
        total: ((subtotal * (1 + HST) + SHIPPING)).toFixed(2),
        shipping: SHIPPING
      }
      setFees(fees);
    }
    calculateFees(subtotal);
  }, [subtotal])

  return (
    <div className="App">
      <h1 className="title">Your Cart</h1>
      {lineItems.map(item => {
        return (
          <CartItems key={item.id} item={item} date={ESTIMATED_DELIVERY}  ></CartItems>
      )})}
      <CartFees fees={fees} />
      <PostalCode />
    </div>
  );
}

export default App;
