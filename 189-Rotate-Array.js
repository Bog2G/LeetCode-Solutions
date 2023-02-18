var rotate = function (nums, k) {
  if (nums.length < k) {
    for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
    }
  } else {
    let nums2 = nums.splice(nums.length - k, nums.length).reverse();
    nums2.map((x) => nums.unshift(x));
  }
};
