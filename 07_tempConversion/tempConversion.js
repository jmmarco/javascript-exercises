const ftoc = function (fTemp) {
  const cTemp = (fTemp - 32) / 1.8;
  return cTemp === 0 ? cTemp : Number(cTemp.toFixed(1));
};

const ctof = function (cTemp) {
  const fTemp = cTemp * 1.8 + 32;
  return fTemp === 0 ? fTemp : Number(fTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
