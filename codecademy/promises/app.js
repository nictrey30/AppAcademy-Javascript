const {
  checkInventory,
  processPayment,
  shipOrder,
  checkAvailability
} = require('./library.js');

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

// check availability of diffrent products
let distribuitorName = 'Bocris';
const checkSunglasses = checkAvailability('sunglasses', distribuitorName);
const checkPants = checkAvailability('pants', distribuitorName);
const checkBags = checkAvailability('bags', distribuitorName);

Promise.all([checkSunglasses, checkPants, checkBags])
  .then(resolveArr => {
    console.log(`Items checked: ${resolveArr}`);
    console.log(
      `Every item was available from the distributor. Placing order now.`
    );
  })
  .catch(err => console.log(err));
