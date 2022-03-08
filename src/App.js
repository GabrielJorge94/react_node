import './App.css';

import CartItems from './components/CartItems';
import CartFees from './components/CartFees';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './context/State';
import getLineItems from './api/lineItems';
import getEstimatedDelivery from './api/estimatedDeliveryData';
import PostalCode from './components/PostalCode';

function App() {
    

  const [lineItems, setLineItems] = useState([]);
  const [fees, setFees] = useState([]);
  const [postalCode, setPostalCode] = useState('');

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

  const getEstimatedDeliveryDate = (postalCode) => {
    getEstimatedDelivery(postalCode).then(data => {
      const estimatedDelivery = data.estimatedDelivery.filter(estimated => {
        return estimated.ids.some(id => items.some(item => item.id === id));
      });
      

      if (estimatedDelivery.length === 0) {
        alert('No delivery date found for this postal code');
      } else {
        lineItems.map(item => {
          return estimatedDelivery.map(estimated => {
            return estimated.ids.includes(item.id) ? item.estimatedDeliveryDate = estimated.estimatedDeliveryDate : null;
          });
        });
      }
      setPostalCode('');
    });
  }

  return (
    <div className="App">
      <h1 className="title">Your Cart</h1>
      {lineItems.map(item => {
        return (
          <CartItems key={item.id} item={item} />
      )})}
      <CartFees fees={fees} />
      <PostalCode getEstimatedDeliveryDate={getEstimatedDeliveryDate} setPostalCode={setPostalCode} postalCode={postalCode} />
    </div>
  );
}

export default App;
