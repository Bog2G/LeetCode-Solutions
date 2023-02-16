var longestCommonPrefix = function (strs) {
  let max = "";
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    prefix = prefix.concat(strs[0][i]);
    const strs2 = strs.filter((x) => x.slice(0, prefix.length) === prefix);
    if (strs2.length === strs.length) {
      max = prefix;
    }
  }

  return max;
};
