const checkInventory = require('./library.js');
const order = [
  ['sunglasses', 1],
  ['bags', 2]
];

checkInventory(order)
  .then(data => console.log(data))
  .catch(err => console.log(err));
