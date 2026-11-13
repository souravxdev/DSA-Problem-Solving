# 344. Reverse String

**Source:** [LeetCode 344](https://leetcode.com/problems/reverse-string/) · **Topic:** Two Pointers · **Difficulty:** Easy

## Problem

Reverse an array of characters in place, using only O(1) extra memory. Nothing is returned; the judge checks the array itself.

## Approach

**Pattern:** two pointers from opposite ends, moving towards the middle (same as my [practice version](../../../problems/two-pointers/03-reverse-string))

1. Pair each index `i` in the first half with its mirror `len - i - 1`.
2. Swap the two characters.
3. Stop after `Math.floor(len / 2)` swaps; with an odd length the middle character stays put.

The TS writes the same idea with explicit `left`/`right` pointers that close in until they meet.

**Example:** `["h","e","l","l","o"]` → `["o","l","l","e","h"]`; `["H","a","n","n","a","h"]` → `["h","a","n","n","a","H"]`

## Complexity

- **Time:** O(n), n/2 swaps
- **Space:** O(1), swaps in place

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
