var sortedSquares = function (nums) {
  nums = nums.map((x) => x ** 2);
  nums.sort((a, b) => a - b);

  return nums;
};
