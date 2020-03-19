// return true 50% of the time
let randomSucces = () => {
  return Math.random() < 0.5;
};
// this function returns a promise that resolves half of the time and rejects half of the time
let cookBeanSouffle = () => {
  return new Promise((resolve, reject) => {
    console.log('Fingers crossed... Putting the Bean Souffle in the oven');
    setTimeout(() => {
      if (randomSucces()) {
        resolve('Bean Souffle');
      } else {
        reject('Dinner is Ruinned!');
      }
    }, 1000);
  });
};

module.exports = cookBeanSouffle;
