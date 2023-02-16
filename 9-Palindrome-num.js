var isPalindrome = function (x) {
  if (x == String(x).split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};
