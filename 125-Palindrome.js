var isPalindrome = function (s) {
  s = Array.from(s).filter((letter) => /^[a-zA-Z0-9]+$/.test(letter));

  if (s.join("").toLowerCase() === s.reverse().join("").toLowerCase()) {
    return true;
  } else {
    return false;
  }
};
