//O(n^2)
// var maxProfit = function (prices) {
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       let profit = prices[j] - prices[i];
//       maxProfit = Math.max(maxProfit, profit);
//     }
//   }
//   return maxProfit;
// };

// console.log(maxProfit([2, 4, 1]));

//Linear Complexity O(n)
var maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0;
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};

console.log(maxProfit([2, 4, 1]));
