export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let sum = 0;
  let max = 0;

  // this initialises max so i can use a [i - 1] in the next loop
  for (let i = 0; i < k; i++) {
    sum += inputArray[i];
  }
  max = sum;

  // takes off the number before and adds the number after to get the sums
  for (let i = 0; i < inputArray.length - k; i++) {
    sum -= inputArray[i];
    sum += inputArray[i + k]

    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));