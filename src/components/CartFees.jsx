import React from 'react';

import cartFees from '../styles/cartFees.css';

const CartFees = (props) => {

  const {subtotal, hst, total, shipping} = props.fees;

  return (
    <div className="cart-fees">
      <div className="fees">
        <h3>Subtotal</h3>
        <p>${subtotal}</p>
      </div>
      <div className="fees">
        <h3>Taxes(estimated)</h3>
        <p>${hst}</p>
      </div>
      <div className="fees">
        <h3>Shipping</h3>
        <p>${shipping}</p>
      </div>
      <div className="fees">
        <h3 className="cart-total">Total</h3>
        <p>${total}</p>
      </div>
    </div>
  );
};

export default CartFees;