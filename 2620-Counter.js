var createCounter = function (n) {
  let incrementer = -1;
  return function () {
    return n + ++incrementer;
  };
};
