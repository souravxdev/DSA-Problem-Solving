const STAR = "*";
const SEPARATOR = " ";
const CELL_WIDTH = STAR.length + SEPARATOR.length;

type Bit = 0 | 1;

// Pattern 1: n x n star square
export function square(n: number): string[] {
  const rows: string[] = [];
  for (let i = 0; i < n; i++) {
    const row: string[] = [];
    for (let j = 0; j < n; j++) {
      row.push(STAR);
    }
    rows.push(row.join(SEPARATOR));
  }
  return rows;
}

// Pattern 2: right-angled star triangle
export function rightTriangle(n: number): string[] {
  const rows: string[] = [];
  for (let i = 0; i < n; i++) {
    const row: string[] = [];
    for (let j = 0; j <= i; j++) {
      row.push(STAR);
    }
    rows.push(row.join(SEPARATOR));
  }
  return rows;
}

// Pattern 3: right-angled number triangle - the number changes along the row (j + 1)
export function numberTriangle(n: number): string[] {
  const rows: string[] = [];
  for (let i = 0; i < n; i++) {
    const row: number[] = [];
    for (let j = 0; j <= i; j++) {
      row.push(j + 1);
    }
    rows.push(row.join(SEPARATOR));
  }
  return rows;
}

// Pattern 4: triangle of repeated numbers - the number changes per row (i + 1)
export function repeatedNumberTriangle(n: number): string[] {
  const rows: string[] = [];
  for (let i = 0; i < n; i++) {
    const row: number[] = [];
    for (let j = 0; j <= i; j++) {
      row.push(i + 1);
    }
    rows.push(row.join(SEPARATOR));
  }
  return rows;
}

// Pattern 5: reverse number triangle - each row is one shorter (j < n - i)
export function reverseNumberTriangle(n: number): string[] {
  const rows: string[] = [];
  for (let i = 0; i < n; i++) {
    const row: number[] = [];
    for (let j = 0; j < n - i; j++) {
      row.push(j + 1);
    }
    rows.push(row.join(SEPARATOR));
  }
  return rows;
}

// Pattern 6: right-aligned star triangle - padding first, then stars
export function rightAlignedTriangle(n: number): string[] {
  const rows: string[] = [];
  for (let i = 0; i < n; i++) {
    let padding = "";
    for (let j = 0; j < n - i - 1; j++) {
      padding += " ".repeat(CELL_WIDTH); // one empty cell for each missing star
    }
    const stars: string[] = [];
    for (let k = 0; k < i + 1; k++) {
      stars.push(STAR);
    }
    rows.push(padding + stars.join(SEPARATOR));
  }
  return rows;
}

// Pattern 7: alternating 1s and 0s - toggle starts at 1 on every row
export function alternatingTriangle(n: number): string[] {
  const rows: string[] = [];
  for (let i = 0; i < n; i++) {
    let toggle: Bit = 1;
    const row: Bit[] = [];
    for (let j = 0; j <= i; j++) {
      row.push(toggle);
      toggle = toggle === 1 ? 0 : 1;
    }
    rows.push(row.join(SEPARATOR));
  }
  return rows;
}

// Pattern 8: alternating 1s and 0s - one toggle carries on across rows
export function globalToggleTriangle(n: number): string[] {
  const rows: string[] = [];
  let toggle: Bit = 1;
  for (let i = 0; i < n; i++) {
    const row: Bit[] = [];
    for (let j = 0; j <= i; j++) {
      row.push(toggle);
      toggle = toggle === 1 ? 0 : 1;
    }
    rows.push(row.join(SEPARATOR));
  }
  return rows;
}

function printRows(rows: readonly string[]): void {
  for (const row of rows) {
    console.log(row); // one line per row
  }
}

const N = 4;

printRows(square(N));
/*
* * * *
* * * *
* * * *
* * * *
*/

printRows(rightTriangle(N));
/*
*
* *
* * *
* * * *
*/

printRows(numberTriangle(N));
/*
1
1 2
1 2 3
1 2 3 4
*/

printRows(repeatedNumberTriangle(N));
/*
1
2 2
3 3 3
4 4 4 4
*/

printRows(reverseNumberTriangle(N));
/*
1 2 3 4
1 2 3
1 2
1
*/

printRows(rightAlignedTriangle(N));
/*
      *
    * *
  * * *
* * * *
*/

printRows(alternatingTriangle(N));
/*
1
1 0
1 0 1
1 0 1 0
*/

printRows(globalToggleTriangle(N));
/*
1
0 1
0 1 0
1 0 1 0
*/
