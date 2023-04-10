var lengthOfLastWord = function (s) {
  s = s.trim().split(" ");

  let lengthOfS = s[s.length - 1].length;

  return lengthOfS;
};
