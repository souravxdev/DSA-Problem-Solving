// Pattern 1: n x n star square
for (let i = 0; i < 4; i++) {
  let row = " ";
  for (let j = 0; j < 4; j++) {
    row = row + "*";
  }
  console.log(row);
}

// i -> first loop -> responsible for row
// j -> second loop -> responsible for column

/*
 ****
 ****
 ****
 ****
*/
