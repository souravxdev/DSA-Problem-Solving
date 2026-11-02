# 1464. Maximum Product of Two Elements in an Array

**Source:** [LeetCode 1464](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/) · **Topic:** Arrays · **Difficulty:** Easy

## Problem

Pick two different positions in an array of positive integers, subtract 1 from each of the two values and multiply them. Return the largest result possible.

## Approach

**Pattern:** running max (largest and second largest in one pass)

Every number is at least 1, so the biggest product always comes from the two largest values.

1. Keep `firstLargest` and `secondLargest`, both starting at `-Infinity`.
2. For each number:
   - Bigger than `firstLargest` → the old `firstLargest` moves down to `secondLargest`, and the number becomes `firstLargest`.
   - Otherwise, bigger than `secondLargest` → it becomes `secondLargest`.
3. Return `(firstLargest - 1) * (secondLargest - 1)`.

Unlike the [second largest practice problem](../../../problems/arrays/06-second-largest-number-in-an-array), duplicates are allowed here: the rule is two different *positions*, not two different *values*. That's why there is no `!== firstLargest` check, so `[1, 5, 4, 5]` uses both 5s.

**Example:** `[3, 4, 5, 2]` → `(5-1) × (4-1)` = `12`; `[1, 5, 4, 5]` → `(5-1) × (5-1)` = `16`

## Complexity

- **Time:** O(n), a single pass through the array
- **Space:** O(1), only two variables

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
