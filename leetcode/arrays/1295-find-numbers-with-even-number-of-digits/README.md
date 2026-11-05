# 1295. Find Numbers with Even Number of Digits

**Source:** [LeetCode 1295](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/) · **Topic:** Arrays · **Difficulty:** Easy

## Problem

Given an array of positive integers, count how many of them have an even number of digits (2, 4, 6, …).

## Approach

**Pattern:** linear scan + digit counting (a `while` loop inside a `for` loop) + counting

1. Start `numOfEvenNumber` at `0`, **outside** the `for` loop, because it counts across the whole array.
2. For each number, copy it into `number` and start `count` at `0`, **inside** the loop, so every number gets its own digit count.
3. Count its digits with the [count digits](../../../problems/math/01-count-digits) loop: divide by 10 until it reaches 0.
4. Still inside the `for` loop, if `count % 2 === 0`, increase `numOfEvenNumber`.
5. Return `numOfEvenNumber` only after every number has been checked.

What went wrong along the way, and why:

- `Math.abs(nums)` on the whole array gives `NaN`; the digit loop has to run on `nums[i]`, one number at a time.
- Replacing the `while` loop with the `for` loop divided each number only once; the two loops have different jobs and are both needed.
- `return count` inside the `for` loop exited after the first number; the function returns once, at the end.
- The even check outside the `for` loop couldn't see `count`, which is block-scoped to the loop.

The TypeScript version pulls the digit counting into its own `countDigits` helper, so `findNumbers` reads as "for each number, is its digit count even?".

**Example:** `[12, 345, 2, 6, 7896]` → `2` (12 and 7896); `[555, 901, 482, 1771]` → `1` (1771)

## Complexity

- **Time:** O(n × d), n numbers with up to d digits each; d is at most 6 here, so effectively O(n)
- **Space:** O(1)

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
