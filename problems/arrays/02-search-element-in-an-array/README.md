# Search Element in an Array

**Topic:** Arrays · **Difficulty:** Easy

## Problem

Write a function that searches for an element in an array and returns the index, if the element is not present then return -1.

## Approach

Linear search:

1. Go through the array from the start.
2. As soon as an element equals the target, return its index. This also stops the loop.
3. If the loop finishes without a match, return `-1`. "Not found" can only be decided after every element has been checked.

**Example:** `[4, 2, 0, 10, 8, 30]`, target `30` → `5`; target `7` → `-1`

## Complexity

- **Time:** O(n), in the worst case every element is checked
- **Space:** O(1)

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
