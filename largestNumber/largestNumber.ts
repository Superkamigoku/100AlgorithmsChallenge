export function largestNumber(n: number): number {
  return parseInt(''.padStart(n, '9'));
}

console.log(largestNumber(2));