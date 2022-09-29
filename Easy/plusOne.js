var plusOne = function(digits) {
  let str=digits.join("");
  let count = BigInt(str)+BigInt(1);
  return count.toString().split("").map(Number);
};

console.log(plusOne([1,9]))