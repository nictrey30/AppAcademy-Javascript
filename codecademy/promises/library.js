const store = {
  sunglasses: {
    inventory: 817,
    cost: 9.99
  },
  pants: {
    inventory: 236,
    cost: 7.99
  },
  bags: {
    inventory: 17,
    cost: 12.99
  }
};

const checkInventory = order => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inStock = order.every(item => inventory[item[0]] > item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      } else {
        reject(
          `We're sorry. Your order could not be completed because some items are sold out.`
        );
      }
    }, 1500);
  });
};
module.exports = checkInventory;
