function eligible(age) {
  if (age < 0) {
    console.log("Invalid Input");
  } else if (age < 18) {
    console.log("Not eligible to Vote");
  } else {
    console.log("Eligible to Vote");
  }
}

eligible(-1); // Invalid Input
eligible(10); // Not eligible to Vote
eligible(20); // Eligible to Vote
