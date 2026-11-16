const NO_PROFIT = 0;

export function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let best = NO_PROFIT;
  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > best) {
      best = price - minPrice;
    }
  }
  return best;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
