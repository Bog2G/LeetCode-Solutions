var romanToInt = function (s) {
  const romanNums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = 0;

  for (let i = 0; i < s.length; i++) {
    if (romanNums[s[i]] < romanNums[s[i + 1]]) {
      num -= romanNums[s[i]];
    } else {
      num += romanNums[s[i]];
    }
  }

  return num;
};
