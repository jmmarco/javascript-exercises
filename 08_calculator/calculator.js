const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((acc, number) => {
    return acc + number;
  }, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
