import React, { useContext } from 'react';
import { GlobalContext } from '../context/State';

import cartItems from '../styles/cartItems.css';


const CartItems = (props) => {

  const { removeItem } = useContext(GlobalContext);

  const {image, swatchColor, swatchTitle, title, price} = props.item;
  const { date } = props;

  return (
    <div className="item-container">
      <img className="item-img" src={image} alt={title} />
      <div className="item-content-wrap">
        <h3>{title}</h3>
        <div className="item-content" >
          <div className="swatch-color" style={{backgroundColor: swatchColor}} />
          <div className="swatch-title">
            <h4>{swatchTitle}</h4>
          </div>
        </div>
      </div>
      <div className="item-info">
        <h3>${price}</h3>
        <h3>Estimated Delivery Date: {date}</h3>
        <button onClick={ () => removeItem(props.item) }>Remove</button>
      </div>
    </div>
  );
}

export default CartItems;