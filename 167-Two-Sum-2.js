var twoSum = function (numbers, target) {
  let searched = target;
  let numbers2 = [...new Set(numbers)];
  for (const num of numbers2) {
    searched -= num;
    if (numbers2.includes(searched)) {
      return [numbers.indexOf(num) + 1, numbers.lastIndexOf(searched) + 1];
    }
    searched = target;
  }
};
