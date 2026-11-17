# Merge Sorted Arrays

**Topic:** Arrays · **Difficulty:** Easy

## Problem

Two arrays are already sorted. `nums1` has `m` real values followed by `n` zeros as empty space; `nums2` has `n` values. Merge `nums2` into `nums1` **in place** so the whole of `nums1` ends up sorted. Nothing is returned.

![Problem](problem-1.png)

![Brute force approach and dry run](problem-2.png)

## Approach

**Pattern:** brute force, copy then sort

1. Copy `nums2` into the empty slots at the end of `nums1`: slot `i` (from `m` to `m + n - 1`) gets `nums2[i - m]`.
2. Sort the whole of `nums1` with `sort((a, b) => a - b)`.

Two things worth remembering:

- **The compare function matters.** Without it, `sort` compares numbers as text, so `[10, 9, 1].sort()` gives `[1, 10, 9]`. `a - b` sorts small to big; `b - a` sorts big to small. `sort` changes the array itself, which is exactly what this problem wants.
- **Nothing is returned**, so `console.log(merge(...))` prints `undefined`. Call the function, then print `nums1`.

What I fixed along the way: the parameter was named `num2` while the loop read `nums2`. It only worked because a global `nums2` existed; called with any other array, it threw `ReferenceError: nums2 is not defined`.

**Next step:** this ignores that both arrays are already sorted. Two pointers from the back of each array can fill `nums1` from its end in O(m + n) (LeetCode 88).

**Example:** `[1,2,3,0,0,0]`, m = 3 + `[2,5,6]`, n = 3 → `[1,2,2,3,5,6]`; `[0]`, m = 0 + `[1]` → `[1]`

## Complexity

- **Time:** O((m + n) log(m + n)), the sort dominates
- **Space:** O(1) extra, works inside `nums1`

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
