export function digitDegree(n: number): number {
  let count = 0;
  let digits = n;
  while (true) {
    if (digits.toString().length === 1) {
      return count;
    } else {
      count++;
    }

    // modify digits to reduce, which requires an array, which requires a string
    digits = digits.toString().split('').reduce((acc, num) => {
      return acc + parseInt(num);
    }, 0);
  }
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));