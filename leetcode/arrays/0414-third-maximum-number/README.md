# 414. Third Maximum Number

**Source:** [LeetCode 414](https://leetcode.com/problems/third-maximum-number/) · **Topic:** Arrays · **Difficulty:** Easy

## Problem

Find the third largest distinct value in an array of integers. Repeated values count once. If there are fewer than three distinct values, return the largest instead.

## Approach

**Pattern:** linear scan with three trackers (my [second largest](../../../problems/arrays/06-second-largest-number-in-an-array) practice extended to a third place)

1. Start `firstMax`, `secondMax` and `thirdMax` at `-Infinity`, meaning "nothing found yet".
2. For each number:
   - Bigger than `firstMax` → everything moves down one place: `thirdMax = secondMax`, then `secondMax = firstMax`, then `firstMax = num`. The order matters; doing `firstMax` first would overwrite the value that should move down.
   - Otherwise bigger than `secondMax` and not equal to `firstMax` → `thirdMax = secondMax`, then `secondMax = num`.
   - Otherwise bigger than `thirdMax` and equal to neither of the others → `thirdMax = num`.
3. After the loop, if `thirdMax` is still `-Infinity`, no third distinct value exists, so return `firstMax`.

**What I missed on the first attempt:** the fallback. Returning `thirdMax` directly gave `-Infinity` for `[1, 2]`, `[1]` and `[5, 5, 5]`. The fix is the same "still `-Infinity` after the loop means not found" check as my second largest practice, returning the maximum instead of a message.

`-Infinity` is safe as the starting value even though inputs go down to −2³¹, because every real number is bigger than it.

The TypeScript version skips duplicates once at the top of the loop (`continue`), which removes the repeated `!==` checks, and moves values down with destructuring (`[third, second, first] = [second, first, num]`), which does the shift in one step so the order can't go wrong.

**Example:** `[3, 2, 1]` → `1`; `[1, 2]` → `2` (no third, so the max); `[2, 2, 3, 1]` → `1` (the two 2s count once)

## Complexity

- **Time:** O(n), one pass
- **Space:** O(1), three variables

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
