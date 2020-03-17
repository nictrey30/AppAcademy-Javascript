const { checkInventory, processPayment, shipOrder } = require('./library.js');

const order = {
  items: [
    ['sunglasses', 1],
    ['bags', 2]
  ],
  giftcardBalance: 79.82
};

checkInventory(order)
  .then(dataArr => processPayment(dataArr))
  .then(dataArr => shipOrder(dataArr))
  .then(data => console.log(data))
  .catch(err => console.log(err));
