const { shopForBeans, soakTheBeans, cookTheBeans } = require('./library4');
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  return dinner;
}
makeBeans().then(data => console.log(data));
