# 704. Binary Search

**Source:** [LeetCode 704](https://leetcode.com/problems/binary-search/) · **Topic:** Binary Search · **Difficulty:** Easy

## Problem

Find the index of a target value in a sorted array of unique integers, or return `-1` if it isn't there. The solution must run in O(log n).

## Approach

**Pattern:** binary search (halve the search range each step), applying the linear vs binary search comparison from my [time and space complexity notes](../../../notes/fundamentals/01-time-and-space-complexity)

1. Keep a range `start..end`, starting with the whole array.
2. While `start <= end`, look at the middle element `mid = Math.floor((start + end) / 2)`:
   - bigger than the target → the target can only be on the left, so `end = mid - 1`;
   - smaller than the target → it can only be on the right, so `start = mid + 1`;
   - equal → return `mid`.
3. If the range becomes empty, the target isn't in the array: return `-1`.

`<=` (not `<`) makes sure a range with one element left is still checked, and `mid ± 1` makes the range shrink every step so the loop always ends. `Math.floor` is needed because `/` in JavaScript doesn't do integer division.

**Example:** `[-1,0,3,5,9,12], 9` → `4`; `[-1,0,3,5,9,12], 2` → `-1`

## Complexity

- **Time:** O(log n), the range halves every step (at most 14 steps for 10,000 elements)
- **Space:** O(1)

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
