// Pattern 6: right-aligned star triangle (spaces, then stars)
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4 - (i + 1); j++) {
    row = row + " ";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}

/*
   *
  **
 ***
****
*/
