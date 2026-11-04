# Star Patterns

**Topic:** Basics · **Difficulty:** Easy

## Problem

Print eight star and number patterns with nested loops: squares, triangles, reversed and right-aligned triangles, and alternating 1s and 0s. Each one builds a row string in the inner loop and prints it once the row is complete.

## Approach

The outer loop `i` is the **row**; the inner loop `j` is the **column**. Every pattern follows the same three steps: start an empty `row`, add to it in the inner loop, and print it after the inner loop ends.

| # | Pattern | Inner loop | What goes in the row | Output (n = 4) | Files |
|---|---------|------------|----------------------|----------------|-------|
| 1 | Square | `j < n` | `*` | 4 rows of `* * * *` | [JS](pattern-1-square.js) · [image](pattern-1-square.png) |
| 2 | Right triangle | `j <= i` | `*` | `*` … `* * * *` | [JS](pattern-2-right-triangle.js) · [image](pattern-2-right-triangle.png) |
| 3 | Number triangle | `j <= i` | `j + 1` (changes along the row) | `1` … `1 2 3 4` | [JS](pattern-3-number-triangle.js) · [image](pattern-3-number-triangle.png) |
| 4 | Repeated numbers | `j <= i` | `i + 1` (changes per row) | `1` … `4 4 4 4` | [JS](pattern-4-repeated-number-triangle.js) · [image](pattern-4-repeated-number-triangle.png) |
| 5 | Reverse number triangle | `j < n - i` | `j + 1` | `1 2 3 4` … `1` | [JS](pattern-5-reverse-number-triangle.js) · [image](pattern-5-reverse-number-triangle.png) |
| 6 | Right-aligned triangle | two loops: `n - i - 1` spaces, then `i + 1` stars | spaces, then `*` | `      *` … `* * * *` | [JS](pattern-6-right-aligned-triangle.js) · [image](pattern-6-right-aligned-triangle.png) |
| 7 | Alternating 1/0 | `j <= i` | `toggle`, flipped each step and **reset to 1 every row** | `1`, `1 0`, `1 0 1`, `1 0 1 0` | [JS](pattern-7-alternating-triangle.js) · [image](pattern-7-alternating-triangle.png) |
| 8 | Alternating 1/0, global | `j <= i` | `toggle`, declared **once before the outer loop** | `1`, `0 1`, `0 1 0`, `1 0 1 0` | [JS](pattern-8-global-toggle-triangle.js) · [image](pattern-8-global-toggle-triangle.png) |

Each `pattern-N-*.js` file is my solution, with its full output in a comment at the end. [solution.ts](solution.ts) has all eight as typed functions that return the rows, using `n = 4` and the spacing from the images.

Things to notice:

1. **Patterns 3 and 4 differ by one character.** `j + 1` changes along a row (`1 2 3`); `i + 1` is fixed for the whole row (`3 3 3`).
2. **Pattern 5 shrinks the inner loop** with `j < n - i`, so each row is one shorter than the last.
3. **Pattern 6 uses two inner loops**: one for the padding, one for the stars. The padding shrinks while the stars grow.
4. **Patterns 7 and 8 differ only in where `toggle` is declared.** Inside the outer loop it resets every row; outside, it carries on from where the previous row stopped. Where a variable is declared decides how long it lives (the same lesson as [count negative numbers](../../arrays/03-count-negative-numbers)).

**Example:** pattern 4 with `n = 4` → `1`, `2 2`, `3 3 3`, `4 4 4 4`

## Complexity

- **Time:** O(n²), up to n rows of up to n items
- **Space:** O(n) for the row string being built

## Run

```bash
npx tsx solution.ts                                # TypeScript: all eight patterns
node pattern-1-square.js                           # JavaScript: one pattern
for f in pattern-*.js; do node "$f"; echo; done    # JavaScript: all eight
```
