const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  const sequence = [0, 1];

  for (let i = 1; i < n; i++) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }

  return sequence[sequence.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
