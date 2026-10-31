const VOTING_AGE = 18;

type Eligibility = "Invalid Input" | "Not eligible to Vote" | "Eligible to Vote";

export function eligible(age: number): Eligibility {
  if (age < 0) {
    return "Invalid Input";
  }
  if (age < VOTING_AGE) {
    return "Not eligible to Vote";
  }
  return "Eligible to Vote";
}

console.log(eligible(-1)); // Invalid Input
console.log(eligible(10)); // Not eligible to Vote
console.log(eligible(20)); // Eligible to Vote
