type Pair = [i: number, j: number];

// Pattern 1: full grid - every i with every j
export function fullGrid(n: number): Pair[] {
  const pairs: Pair[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pairs.push([i, j]);
    }
  }
  return pairs;
}

// Pattern 2: below the diagonal - j < i (each pair once, no self-pairs)
export function belowDiagonal(n: number): Pair[] {
  const pairs: Pair[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      pairs.push([i, j]);
    }
  }
  return pairs;
}

// Pattern 3: triangle - j <= i (includes the diagonal)
export function triangle(n: number): Pair[] {
  const pairs: Pair[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      pairs.push([i, j]);
    }
  }
  return pairs;
}

// Pattern 4: countdown - j from i down to 1
export function countdown(n: number): Pair[] {
  const pairs: Pair[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = i; j > 0; j--) {
      pairs.push([i, j]);
    }
  }
  return pairs;
}

// Pattern 5: countdown to zero - j from i down to 0
export function countdownToZero(n: number): Pair[] {
  const pairs: Pair[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = i; j >= 0; j--) {
      pairs.push([i, j]);
    }
  }
  return pairs;
}

// Pattern 6: shrinking rows - i counts down, j runs 0 to i - 1
export function shrinkingRows(n: number): Pair[] {
  const pairs: Pair[] = [];
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      pairs.push([i, j]);
    }
  }
  return pairs;
}

function printPairs(pairs: readonly Pair[]): void {
  for (const [i, j] of pairs) {
    console.log(`i=${i} j=${j}`); // one line per pair
  }
}

printPairs(fullGrid(3)); // i=0 j=0, i=0 j=1, i=0 j=2, i=1 j=0, i=1 j=1, i=1 j=2, i=2 j=0, i=2 j=1, i=2 j=2
printPairs(belowDiagonal(3)); // i=1 j=0, i=2 j=0, i=2 j=1
printPairs(triangle(5)); // i=0 j=0, i=1 j=0, i=1 j=1, i=2 j=0, i=2 j=1, i=2 j=2, i=3 j=0, i=3 j=1, i=3 j=2, i=3 j=3, i=4 j=0, i=4 j=1, i=4 j=2, i=4 j=3, i=4 j=4
printPairs(countdown(3)); // i=1 j=1, i=2 j=2, i=2 j=1
printPairs(countdownToZero(3)); // i=0 j=0, i=1 j=1, i=1 j=0, i=2 j=2, i=2 j=1, i=2 j=0
printPairs(shrinkingRows(5)); // i=5 j=0, i=5 j=1, i=5 j=2, i=5 j=3, i=5 j=4, i=4 j=0, i=4 j=1, i=4 j=2, i=4 j=3, i=3 j=0, i=3 j=1, i=3 j=2, i=2 j=0, i=2 j=1, i=1 j=0
