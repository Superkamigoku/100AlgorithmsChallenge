export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let sum = 0;
  let max = 0

  for (let i = 0; i < inputArray.length - 1; i++) {
    sum = Math.abs(inputArray[i] - inputArray[i + 1]);

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));