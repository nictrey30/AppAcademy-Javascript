function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

withConstructor(0).then(resolveValue =>
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  )
);
withConstructor(3).then(resolveValue =>
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  )
);

// Write an async function, withAsync() which reproduces the functionality of withConstructor(). Though your function will return a promise, it should not construct the promise using the new keyword. Instead, it should rely on the fact that an async function automatically returns a promise.
async function withAsync(num) {
  if (num === 0) {
    return 'zero';
  } else {
    return 'not zero';
  }
}
withAsync(0).then(resolveValue =>
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  )
);
withConstructor(3).then(resolveValue =>
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  )
);
