const checkInventory = require('./library.js');

const order = {
  items: [
    ['sunglasses', 1],
    ['bags', 2]
  ],
  giftcardBalance: 79.82
};

checkInventory(order)
  .then(data => console.log(data))
  .catch(err => console.log(err));
