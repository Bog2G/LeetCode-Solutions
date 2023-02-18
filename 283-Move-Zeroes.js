var moveZeroes = function (nums) {
  let x = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      x.push(nums.splice(i, 1));
      i = -1;
    }
  }
  nums.push(...x);
};
