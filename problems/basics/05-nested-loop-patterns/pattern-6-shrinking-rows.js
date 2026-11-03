// Pattern 6: shrinking rows - i counts down, j runs 0 to i - 1
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log("i=" + i + " " + "j=" + j);
  }
}

/*
i=5 j=0
i=5 j=1
i=5 j=2
i=5 j=3
i=5 j=4
i=4 j=0
i=4 j=1
i=4 j=2
i=4 j=3
i=3 j=0
i=3 j=1
i=3 j=2
i=2 j=0
i=2 j=1
i=1 j=0
*/
