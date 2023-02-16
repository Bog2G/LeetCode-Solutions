var fizzBuzz = function (n) {
  answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : String(i)
    );
  }

  return answer;
};
