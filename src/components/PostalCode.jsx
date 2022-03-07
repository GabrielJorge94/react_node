import React, { useState } from 'react';


const PostalCode = () => {
  const [postalCode, setPostalCode] = useState('');

  const estimatedDeliveryDate = () => {
  //   const DELIVERY_DATES = [
  //     {
  //         postal: "V",
  //         ids: [2],
  //         estimatedDeliveryDate: "Nov 24, 2021"
  //     },
  //     {
  //         postal: "V",
  //         ids: [1,3],
  //         estimatedDeliveryDate: "Nov 19, 2021"
  //     },
  //     {
  //         postal: "M",
  //         ids: [2,3],
  //         estimatedDeliveryDate: "Nov 22, 2021"
  //     },
  //     {
  //         postal: "M",
  //         ids: [1],
  //         estimatedDeliveryDate: "Dec 19, 2021"
  //     },
  //     {
  //         postal: "K",
  //         ids: [1,2,3],
  //         estimatedDeliveryDate: "Dec 24, 2021"
  //     },    
  // ]
    //send to backend to get estimated delivery date

    //return estimated delivery date
  }


  return (
    <div>
      <input type="text" value={ postalCode } onChange={(e) => setPostalCode(e.target.value)} />
    </div>
  );  
}

export default PostalCode;