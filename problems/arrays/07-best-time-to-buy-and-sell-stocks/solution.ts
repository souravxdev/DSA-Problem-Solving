const NO_PROFIT = 0;

export function maxProfit(prices: readonly number[]): number {
  let best = NO_PROFIT;
  for (let buy = 0; buy < prices.length; buy++) {
    for (let sell = buy + 1; sell < prices.length; sell++) {
      const profit = prices[sell] - prices[buy];
      if (profit > best) {
        best = profit;
      }
    }
  }
  return best;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
