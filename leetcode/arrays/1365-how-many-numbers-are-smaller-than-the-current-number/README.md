# 1365. How Many Numbers Are Smaller Than the Current Number

**Source:** [LeetCode 1365](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/) · **Topic:** Arrays · **Difficulty:** Easy

## Problem

For every number in an array, count how many other numbers in the array are strictly smaller than it, and return those counts as a new array.

## Approach

**Pattern:** nested loops, full grid ([pattern 1](../../../problems/basics/05-nested-loop-patterns)) + counting

1. For each number (outer loop), start a fresh `count` at `0`.
2. Compare it with **every** number in the array (inner loop from `0` to the end). Unlike [Good Pairs](../1512-number-of-good-pairs), the numbers after it matter too, so `j < i` isn't enough.
3. If the other number is smaller, increase `count`. Comparing a number with itself is harmless, because `x < x` is false.
4. Push `count` into the result array.

`<` (strictly smaller) is what makes duplicates work: in `[8, 1, 2, 2, 3]` each 2 only counts the 1.

**Example:** `[8, 1, 2, 2, 3]` → `[4, 0, 1, 1, 3]`; `[7, 7, 7, 7]` → `[0, 0, 0, 0]`

## Complexity

- **Time:** O(n²), every number is compared with every number
- **Space:** O(n) for the result array

Sorting a copy, or counting how often each value appears, can bring this down to O(n log n) or O(n); worth revisiting after the sorting and hashing topics.

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
