var arraySign = function (nums) {
  let num = nums.reduce((acc, value) => acc * value);

  if (num > 0) {
    return 1;
  } else if (num < 0) {
    return -1;
  } else {
    return 0;
  }
};
