# 747. Largest Number At Least Twice of Others

**Source:** [LeetCode 747](https://leetcode.com/problems/largest-number-at-least-twice-of-others/) · **Topic:** Arrays · **Difficulty:** Easy

## Problem

The largest value in the array appears once. Return its index if it is at least double every other value, otherwise return `-1`.

## Approach

**Pattern:** running max with its index, then a second pass that exits early on the first failure (first loop is my [largest number](../../../problems/arrays/04-largest-number-in-an-array) practice)

1. First pass: find `largest` and remember its position in `largestIndex`.
2. Second pass: skip `largestIndex` itself (`continue`), because the largest is compared with every *other* number.
3. If any other number breaks the rule (`largest < 2 * nums[i]`), return `-1` immediately.
4. Reaching the end of the loop means every number passed, so return `largestIndex`.

What I fixed along the way:

- **A loop that did nothing.** The first version did `continue` when the rule held and nothing when it failed, so failures were never caught. Checking the failing case and returning `-1` right away fixed it.
- **Comparing the largest with itself.** Without skipping `largestIndex`, `6 >= 2 × 6` is false, so every array would return `-1`.
- **Index `0` is falsy.** `return largestIndex ? largestIndex : -1` turned index `0` into `-1` for `[2, 1]`. Once failures return inside the loop, the final line can return `largestIndex` directly.
- `largestIndex` started as `[]`; it holds a number, so it now starts at `0`.

Exactly double passes: `[4, 2]` → `0`, because the rule is *at least* twice (`4 < 4` is false).

The TypeScript version tracks only the index (`nums[largestIndex]` gives the value) and names `-1` and `2` as constants.

**Example:** `[3, 6, 1, 0]` → `1`; `[1, 2, 3, 4]` → `-1` (4 is less than 2 × 3)

## Complexity

- **Time:** O(n), two separate passes
- **Space:** O(1)

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
