# 1351. Count Negative Numbers in a Sorted Matrix

**Source:** [LeetCode 1351](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/) · **Topic:** Arrays · **Difficulty:** Easy

## Problem

Count the negative numbers in a grid (an array of rows) whose rows and columns are both sorted from largest to smallest. The grid can be rectangular, not just square.

## Approach

**Pattern:** nested loops over a 2D array + counting

1. Start `count` at `0`, once, outside both loops, so it counts the whole grid.
2. The outer loop goes over the rows: `i < grid.length`.
3. The inner loop goes across the columns of that row: `j < grid[i].length`. Using `grid.length` here only works for square grids; a 2 × 3 grid would skip its last column.
4. If `grid[i][j] < 0`, increase `count`. Then return it.

Rule of thumb for any 2D array: **rows are `grid.length`, columns are `grid[i].length`**.

This is [count negative numbers](../../../problems/arrays/03-count-negative-numbers) with a second loop, using the row/column structure from the [star patterns](../../../problems/basics/06-star-patterns).

**Example:** `[[5, 1, 0], [-5, -5, -5]]` (2 × 3) → `3`; LeetCode's 4 × 4 example → `8`

## Complexity

- **Time:** O(m × n), every cell is checked once
- **Space:** O(1)

LeetCode's follow-up asks for O(m + n) by using the sorting: once a row hits its first negative, everything to its right is negative too. Worth coming back to.

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
