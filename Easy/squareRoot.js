/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) {
    return x;
  }
  let i = 1;
  let sq = i * i;
  while (x >= sq) {
    i++;
    sq = i * i;
  }
  return i - 1;
};
