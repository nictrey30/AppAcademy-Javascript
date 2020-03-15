let cat = {
  purr() {
    console.log('meow');
  },
  purrMore(num) {
    let count = 0;
    let handle = setInterval(() => {
      this.purr();
      count++;
      if (count === num) clearInterval(handle);
    }, 1000);
  }
};
cat.purr();
console.log('###############');
cat.purrMore(5);
