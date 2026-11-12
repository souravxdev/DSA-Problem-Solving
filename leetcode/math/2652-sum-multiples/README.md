# 2652. Sum Multiples

**Source:** [LeetCode 2652](https://leetcode.com/problems/sum-multiples/) · **Topic:** Math · **Difficulty:** Easy

## Problem

Add up every number from 1 to `n` that is divisible by 3, 5 or 7.

## Approach

**Pattern:** loop with modulo checks

1. Start `sum` at `0`.
2. Go through every number from `1` to `n`.
3. If it divides evenly by 3, 5 or 7, add it to `sum`. A number like 15 matches more than one divisor but is still added once, because the checks are joined with `||` (`some` in TypeScript).

The TypeScript version keeps the divisors in a named `DIVISORS` constant, so changing the rule means editing one list instead of the condition.

Solved first in Java on 2026-08-22, before this repo existed; `solution.js` is that solution converted to JavaScript.

**Example:** `7` → `21`; `10` → `40`; `9` → `30`

## Complexity

- **Time:** O(n)
- **Space:** O(1)

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
