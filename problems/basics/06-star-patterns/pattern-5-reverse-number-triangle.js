// Pattern 5: reverse number triangle (j < n - i)
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4 - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

// for (let i = 0; i < 4; i++) {
//   let row = "";
//   for (let j = 0; j < 4 - i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

/*
1234
123
12
1
*/
