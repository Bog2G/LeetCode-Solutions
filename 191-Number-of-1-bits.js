var hammingWeight = function (n) {
  let count = 0;
  for (let i of n.toString(2)) {
    if (i == 1) {
      count++;
    }
  }
  return count;
};
