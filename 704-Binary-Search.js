var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  const answer = function binary(start, end, target, nums) {
    if (start > end) return -1;

    let mid = Math.round((start + end) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      return binary(start, mid - 1, target, nums);
    } else {
      return binary(mid + 1, end, target, nums);
    }
  };

  return answer(start, end, target, nums);
};
