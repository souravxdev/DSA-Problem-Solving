type Parity = "Even" | "Odd";
type ParityLabel = `${Parity} Number`;

export function evenOdd(num: number): ParityLabel {
  const parity: Parity = num % 2 === 0 ? "Even" : "Odd";
  return `${parity} Number`;
}

console.log(evenOdd(18)); // Even Number
console.log(evenOdd(5)); // Odd Number
