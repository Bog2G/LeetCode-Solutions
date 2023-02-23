var lengthOfLongestSubstring = function (s) {
  let right = 0;
  let left = 0;
  let sub = [];
  let max = 0;

  while (right < s.length) {
    if (sub.includes(s[right])) {
      sub.splice(0, 1);
      left++;
    } else {
      sub.push(s[right]);
      right++;
      max = Math.max(max, right - left);
    }
  }

  return max;
};
