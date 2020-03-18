const brainstormDinner = require('./library2');

// native promise version
function nativePromiseDinner() {
  brainstormDinner().then(meal =>
    console.log(`I'm going to make ${meal} for dinner.`)
  );
}
// nativePromiseDinner();

// async/await version
async function announceDinner() {
  let meal = await brainstormDinner();
  return meal;
}

announceDinner().then(meal =>
  console.log(`I'm going to make ${meal} for dinner.`)
);
