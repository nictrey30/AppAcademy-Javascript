// let callback = () => {
//   console.log('it has been 2 sec');
// };
// let timeout = 2000;
// setTimeout(callback, timeout);

setTimeout(() => {
  console.log('it has been 1sec');
}, 1000);

function sum(nums) {
  let count = 0;
  function addNum(num) {
    count += num;
  }
  for (let i = 0; i < nums.length; i++) {
    addNum(nums[i]);
  }
  return count;
}

sum([1, 3, 5]);
