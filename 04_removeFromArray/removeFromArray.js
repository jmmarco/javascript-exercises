const removeFromArray = function (arr, ...elements) {
  return arr.reduce((acc, value) => {
    if (!elements.includes(value)) {
      acc.push(value);
    }
    return acc;
  }, []);
};

// Do not edit below this line
module.exports = removeFromArray;
