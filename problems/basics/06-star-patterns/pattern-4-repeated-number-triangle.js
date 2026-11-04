// Pattern 4: triangle of repeated numbers (i + 1)
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}

/*
1
22
333
4444
55555
*/
