function Cat(name) {
  this.name = name;
  this.toys = ['string', 'ball', 'baloon'];
}
/*
Cat.prototype.play = function() {
  // console.log(this); -> Cat
  this.toys.forEach(function(toy) {
    // console.log(this); -> Global
    console.log(`${this.name} plays with ${toy}`);
  });
};
*/

// play breaks because this in this.name refers to the scope of the forEach method.
// undefined plays with string
// undefined plays with ball
// undefined plays with baloon

// But if we rewrite play using a fat arrow function, it works:
Cat.prototype.play = function() {
  this.toys.forEach(toy => console.log(`${this.name} plays with ${toy}`));
};

const garfield = new Cat('Garfield');
garfield.play();
