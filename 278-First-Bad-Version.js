var solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;

    if (isBadVersion(1)) {
      return 1;
    }

    while (left < right) {
      const mid = left + ((right - left) >> 1);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
};
