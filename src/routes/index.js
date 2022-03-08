const express = require('express');
const app = express();

const lineItems = require('./lineItems');
const estimatedDeliveryDate = require('./estimatedDeliveryData');

app.use(lineItems);
app.use(estimatedDeliveryDate);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);});