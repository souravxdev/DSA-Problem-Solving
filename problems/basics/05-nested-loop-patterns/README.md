# Nested Loop Patterns

**Topic:** Basics · **Difficulty:** Easy

## Problem

Explore how changing the inner loop's start, end and direction changes which `(i, j)` pairs a nested loop visits. These shapes come up again and again in array problems.

## Approach

The outer loop picks a row `i`; the inner loop's bounds decide which `j` values that row gets.

| # | Pattern | Inner loop | Pairs visited (n = 3) | Used for | File |
|---|---------|------------|------------------------|----------|------|
| 1 | Full grid | `j = 0; j < n` | all 9, including `(1, 1)` and both `(0, 1)` and `(1, 0)` | every combination, 2D grids | [pattern-1-full-grid.js](pattern-1-full-grid.js) |
| 2 | Below the diagonal | `j = 0; j < i` | `(1,0) (2,0) (2,1)` | each pair once, no self-pairs: [LeetCode 1512 Number of Good Pairs](../../../leetcode/arrays/1512-number-of-good-pairs) | [pattern-2-below-diagonal.js](pattern-2-below-diagonal.js) |
| 3 | Triangle | `j = 0; j <= i` | `(0,0) (1,0) (1,1) (2,0) (2,1) (2,2)` | star / number triangles, pairs including self | [pattern-3-triangle.js](pattern-3-triangle.js) |
| 4 | Countdown | `j = i; j > 0; j--` | `(1,1) (2,2) (2,1)` | walking backwards from `i`, stopping before 0 | [pattern-4-countdown.js](pattern-4-countdown.js) |
| 5 | Countdown to zero | `j = i; j >= 0; j--` | `(0,0) (1,1) (1,0) (2,2) (2,1) (2,0)` | walking backwards from `i` to the start | [pattern-5-countdown-to-zero.js](pattern-5-countdown-to-zero.js) |
| 6 | Shrinking rows | outer `i = n; i > 0; i--`, inner `j < i` | rows of 3, 2, 1 | upside-down triangles | [pattern-6-shrinking-rows.js](pattern-6-shrinking-rows.js) |

Each `pattern-N-*.js` file is one of my loops, with its full output in a comment. [solution.ts](solution.ts) has all six as typed functions that return the `[i, j]` pairs.

Things to notice:

1. `<` vs `<=` decides whether the diagonal (`i === j`) is included: patterns 2 and 3.
2. `> 0` vs `>= 0` decides whether a countdown reaches index 0: patterns 4 and 5.
3. Pattern 2 visits **n × (n − 1) / 2** pairs, roughly half of the full grid's n².

**Example:** pattern 2 with `n = 3` → `i=1 j=0`, `i=2 j=0`, `i=2 j=1`

## Complexity

- **Time:** O(n²) for every pattern; the triangle shapes do about half the work of the full grid, but still grow with n²
- **Space:** O(1) in the JS files (they print directly); O(n²) in TS, which collects the pairs into an array

## Run

```bash
npx tsx solution.ts             # TypeScript: all six patterns
node pattern-1-full-grid.js     # JavaScript: one pattern at a time
for f in pattern-*.js; do node "$f"; done   # JavaScript: all six
```
