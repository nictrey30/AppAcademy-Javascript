// Asking the user to enter tempt in celsius and transform in kelvin
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hey, so what is the Celsius temperature today? ', function(temp) {
  console.log(`temp in Kelvin is: ${parseInt(temp) + 273.15} degrees`);
  rl.close();
});

rl.on('close', function() {
  process.exit(0);
});
