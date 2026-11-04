// Pattern 3: right-angled number triangle (j + 1)
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

/*
1
12
123
1234
12345
*/
