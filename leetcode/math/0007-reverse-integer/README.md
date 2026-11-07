# 7. Reverse Integer

**Source:** [LeetCode 7](https://leetcode.com/problems/reverse-integer/) · **Topic:** Math · **Difficulty:** Medium

## Problem

Reverse the digits of a signed 32-bit integer, keeping its sign. If the reversed number falls outside the 32-bit range, return `0`.

## Approach

**Pattern:** reverse a number digit by digit + a 32-bit range check on the result (same as my [reverse integer practice](../../../problems/math/03-reverse-integer))

1. Keep the original, and reverse the digits of its absolute value: last digit with `% 10`, append with `reverse * 10 + lastDigit`, drop with `Math.floor(/ 10)`.
2. After the loop, return `0` if the reversed value is outside **−2³¹ to 2³¹ − 1** (`-2147483648` to `2147483647`).
3. Put the sign back.

**The bug on the first attempt:** `Math.pow(2, 32)` instead of `Math.pow(2, 31)`. A *signed* 32-bit integer uses one bit for the sign, leaving 31 for the value. With 2³² as the limit, results like `2147483651` (from `1563847412`) slipped through.

**What LeetCode's note means:** "Assume the environment does not allow you to store 64-bit integers." In Java or C++, `reverse * 10 + lastDigit` would overflow *inside* the loop, before an after-loop check ever runs. The interview-ready version checks before multiplying: if `reverse` is already bigger than `INT32_MAX / 10`, the next step will overflow. JavaScript numbers can hold the larger intermediate values, so the after-loop check is accepted here, but the in-loop check is the answer an interviewer is looking for.

**Example:** `123` → `321`; `-123` → `-321`; `120` → `21`; `1563847412` → `0` (overflow)

## Complexity

- **Time:** O(d), at most 10 digits
- **Space:** O(1)

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
