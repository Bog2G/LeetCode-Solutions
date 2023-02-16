var searchInsert = function (nums, target) {
  if (nums.indexOf(target) === -1) {
    let filtered = nums.filter((x) => x < target);
    return nums.indexOf(Math.max(...filtered)) + 1;
  } else {
    return nums.indexOf(target);
  }
};
