// Pattern 2: below the diagonal - j < i (each pair once, no self-pairs)
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log("i=" + i + " " + "j=" + j);
  }
}

/*
i=1 j=0
i=2 j=0
i=2 j=1
*/
