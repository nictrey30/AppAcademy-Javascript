// closures
// a inner function has access to the variables and parameters of the outer function, even after the outer function ahs returned.

function retirement(retirementAge) {
  let msg = ' years until retirement';
  return function(yearOfBirth) {
    let age = new Date().getFullYear() - yearOfBirth;
    return `${retirementAge - age} ${msg}`;
  };
}

let retirementUS = retirement(66);
// console.log(`John, an US citizen has ${retirementUS(1990)}`);
let retirementRO = retirement(65);
// console.log(`Ion, a Romanian citizen has ${retirementUS(1985)}`);

// function soundMaker(sound, times) {
//   function makeSound() {
//     console.log(`${sound}`);
//   }
//   for (let i = 0; i < times; i++) {
//     makeSound();
//   }
// }
// soundMaker('miau', 3);
function soundMaker(sound) {
  return function(times) {
    for (let i = 0; i < times; i++) {
      console.log(`${sound}`);
    }
  };
}
let sayMiau = soundMaker('miau');
sayMiau(4);

function summation(arr) {
  let sum = 1;
  function summer() {
    arr.forEach(el => (sum *= el));
  }
  summer();
  return sum;
}
console.log(summation([1, 2, 3, 4]));
