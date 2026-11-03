// Pattern 3: triangle - j <= i (includes the diagonal)
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("i=" + i + " " + "j=" + j);
  }
}

/*
i=0 j=0
i=1 j=0
i=1 j=1
i=2 j=0
i=2 j=1
i=2 j=2
i=3 j=0
i=3 j=1
i=3 j=2
i=3 j=3
i=4 j=0
i=4 j=1
i=4 j=2
i=4 j=3
i=4 j=4
*/
