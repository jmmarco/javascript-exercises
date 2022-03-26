const palindromes = function (str) {
  const original = str.toLowerCase().split(/\W+/gi).join("");
  const reversed = reverseStr(str.toLowerCase()).split(/\W+/gi).join("");
  return original === reversed;
};

function reverseStr(str) {
  let resultStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultStr += str[i];
  }
  return resultStr;
}

// Do not edit below this line
module.exports = palindromes;
