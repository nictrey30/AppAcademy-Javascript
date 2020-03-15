function isPalindrome(string) {
  function reverse() {
    return string
      .split('')
      .reverse()
      .join('');
  }
  return string === reverse();
}
console.log(isPalindrome('aerisirea'));
