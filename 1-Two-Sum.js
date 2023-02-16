var twoSum = function (nums, target) {
  const indxs = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indxs.push(nums.indexOf(nums[i]), nums.lastIndexOf(nums[j]));
        return indxs;
      }
    }
  }
};
