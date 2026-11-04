// Pattern 7: alternating 1s and 0s, toggle reset every row
for (let i = 0; i < 5; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j <= i; j++) {
    row = row + toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}

/*
1
10
101
1010
10101
*/
