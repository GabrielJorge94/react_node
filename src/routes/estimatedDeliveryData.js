const express = require('express');
const router = express.Router();
const cors = require('cors');

const DELIVERY_DATES = [
  {
      postal: "V",
      ids: [2],
      estimatedDeliveryDate: "Nov 24, 2021"
  },
  {
      postal: "V",
      ids: [1,3],
      estimatedDeliveryDate: "Nov 19, 2021"
  },
  {
      postal: "M",
      ids: [2,3],
      estimatedDeliveryDate: "Nov 22, 2021"
  },
  {
      postal: "M",
      ids: [1],
      estimatedDeliveryDate: "Dec 19, 2021"
  },
  {
      postal: "K",
      ids: [1,2,3],
      estimatedDeliveryDate: "Dec 24, 2021"
  },    
]

router.get('/estimated', cors(), (req, res) => {
  res.send(DELIVERY_DATES);
});

router.get('/estimated/:postal', cors(), (req, res) => {
    const postal = req.params.postal;
    const deliveryDate = DELIVERY_DATES.filter(delivery => delivery.postal === postal[0].toUpperCase());
    
    res.status(200).send({
        estimatedDelivery: deliveryDate.map(delivery => delivery)
    });

    res.status(500).send({
        error: 'Internal server error'
    });

    res.status(404).send({
        error: 'Delivery date not found on our database, please try another postal code'
    });
});

module.exports = router;
