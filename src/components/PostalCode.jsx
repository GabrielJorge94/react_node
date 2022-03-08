import React, { useState } from 'react';
import postalCode from '../styles/postalCode.css';

const PostalCode = (props) => {

    const {postalCode, setPostalCode, getEstimatedDeliveryDate} = props;

  return (
    <div className="postal-code-container">
      <input className="postal-code-content" type="text" value={ postalCode } onChange={(e) => setPostalCode(e.target.value)} placeholder="Enter your Postal Code"/>
      <button className="postal-code-button" onClick={() => getEstimatedDeliveryDate(postalCode)}>
        <span className="postal-code-button-text">
          Estimate delivery date
        </span>
      </button>
    </div>
  );  
}

export default PostalCode;