# 1512. Number of Good Pairs

**Source:** [LeetCode 1512](https://leetcode.com/problems/number-of-good-pairs/) · **Topic:** Arrays · **Difficulty:** Easy

## Problem

Count the pairs of positions in an array that hold the same value, counting each pair once (the first position must come before the second).

## Approach

**Pattern:** nested loops over pairs + counting

1. Start `count` at `0`.
2. The outer loop picks a position `i`.
3. The inner loop picks every *other* position paired with `i`, but only on one side, so each pair is visited once and never with itself:
   - JS: `j` runs from `0` up to `i - 1` (positions before `i`)
   - TS: `j` runs from `i + 1` to the end (positions after `i`)
4. If the two values are equal, increase `count`.
5. Return `count`.

**Example:** `[1, 2, 3, 1, 1, 3]` → `4` (pairs (0,3), (0,4), (3,4), (2,5)); `[1, 1, 1, 1]` → `6`

## Complexity

- **Time:** O(n²), every pair is checked once (n × (n − 1) / 2 comparisons)
- **Space:** O(1)

A hash map can count pairs in O(n); that comes up in the hashing topic.

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
