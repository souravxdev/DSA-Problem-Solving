// Pattern 5: countdown to zero - j from i down to 0
for (let i = 0; i < 3; i++) {
  for (let j = i; j >= 0; j--) {
    console.log("i=" + i + " " + "j=" + j);
  }
}

/*
i=0 j=0
i=1 j=1
i=1 j=0
i=2 j=2
i=2 j=1
i=2 j=0
*/
