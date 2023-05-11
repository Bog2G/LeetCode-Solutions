var reduce = function (nums, fn, init) {
  let final = init;
  for (let i = 0; i < nums.length; i++) {
    final = fn(final, nums[i]);
  }

  return final;
};
