export function arrayChange(inputArray: number[]): number {
  let count = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      // since it 'failed' the test the difference count must be at least one
      const difference = (inputArray[i] + 1) - inputArray[i + 1];
      // modifying the array by one means that the count will be accurate at the next part of the loop
      inputArray[i + 1] = inputArray[i] + 1;
      count += difference;
    }
  }

  return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1, 3, 2]));