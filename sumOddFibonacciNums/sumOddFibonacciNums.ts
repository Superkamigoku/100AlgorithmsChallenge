export function sumOddFibonacciNums(num: number): number {
  let previous = 0;
  let current = 1;
  let total = 0;

  while (current <= num) {
    if (current % 2 !== 0) {
      total += current;
    }

    const nextCurrent = previous + current;
    previous = current;
    current = nextCurrent;
  }

  return total;
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));