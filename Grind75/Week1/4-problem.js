/**
 *
 * You are given an array prices where prices[i]
 * is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single
 * day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 *
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0];
  let maxValue = 0;
  let maxProfitValue = 0;

  for (let index = 0; index < prices.length; index++) {
    const stock = prices[index];

    if (stock < buy && index !== prices.length - 1) {
      buy = stock;
      maxValue = stock;
    } else {
      maxValue = Math.max(maxValue, stock);
      maxProfitValue = Math.max(maxProfitValue, maxValue - buy);
    }
  }

  return maxProfitValue;
};

console.log(`Best time to buy: ${maxProfit([7, 1, 5, 3, 6, 4])}`);
console.log(`Best time to buy: ${maxProfit([7, 6, 4, 3, 1])}`);
console.log(`Best time to buy: ${maxProfit([2, 4, 1])}`);
console.log(`Best time to buy: ${maxProfit([3, 2, 6, 5, 0, 3])}`); // 4
console.log(`Best time to buy: ${maxProfit([2, 1, 2, 1, 0, 1, 2])}`); // 2
