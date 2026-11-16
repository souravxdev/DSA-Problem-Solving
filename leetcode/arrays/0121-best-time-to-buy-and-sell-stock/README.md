# 121. Best Time to Buy and Sell Stock

**Source:** [LeetCode 121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) · **Topic:** Arrays · **Difficulty:** Easy

## Problem

Given each day's stock price, buy once and sell once on a later day so the profit is as large as possible. Return that profit, or `0` if every possible trade loses money.

## Approach

**Pattern:** running min + best difference in one pass (uses my [smallest number](../../../problems/arrays/05-smallest-number-in-an-array) practice)

1. Start `minPrice` at `Infinity` and `maxProfit` at `0`.
2. For each price:
   - Lower than `minPrice` → it's the cheapest day so far to buy, so update `minPrice`.
   - Otherwise, selling today earns `price - minPrice`; keep it if it beats `maxProfit`.
3. Return `maxProfit`. If prices only fall, nothing beats `0`.

**The key idea:** if I sell on day `j`, the best buy day is simply the cheapest day before it. Tracking that minimum while I go means I never need to look back.

**Why my first version timed out:** my [practice solution](../../../problems/arrays/07-best-time-to-buy-and-sell-stocks) checks every buy/sell pair with nested loops, O(n²). With up to 10⁵ prices that is about 5 billion pairs, so LeetCode gave Time Limit Exceeded. The one-pass version does 10⁵ steps.

**Example:** `[7, 1, 5, 3, 6, 4]` → `5` (buy at 1, sell at 6); `[7, 6, 4, 3, 1]` → `0`

## Complexity

- **Time:** O(n), one pass
- **Space:** O(1), two variables

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
