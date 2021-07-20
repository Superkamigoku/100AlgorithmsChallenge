export function circleOfNumbers(n: number, firstNumber: number): number {
  // Perhaps could make it simpler
  return n / 2 > firstNumber ? Math.round(n / 2 + firstNumber) : Math.round(n / 2 - firstNumber);
}

console.log(circleOfNumbers(10, 2));