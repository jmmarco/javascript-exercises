const sumAll = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") return "ERROR";
  if (a < 0 || b < 0) return "ERROR";

  let result = 0,
    start = a,
    end = b;

  if (start > end) {
    start = b;
    end = a;
  }

  for (let n = start; n <= end; n++) {
    result += n;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
