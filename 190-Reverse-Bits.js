var reverseBits = function (n) {
  let bits = n.toString(2).padStart(32, "0");
  console.log(bits);
  console.log(bits.split("").reverse().join(""));
  let num = parseInt(bits.split("").reverse().join(""), 2);

  return num;
};
