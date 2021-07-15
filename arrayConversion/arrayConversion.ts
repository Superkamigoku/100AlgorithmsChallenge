export function arrayConversion(inputArray: number[]): number {
  // Start with false since it changes at the start
  let isOdd = false;

  while (inputArray.length !== 1) {
    isOdd = !isOdd
    let modArr = [];

    if (isOdd) {
      // odd iteration
      // add pairs
      for (let i = 0; i < inputArray.length; i += 2) {
        if (inputArray[i + 1]) {
          modArr.push(inputArray[i] + inputArray[i + 1]);
        } else if (i === inputArray.length - 1) {
          modArr.push(inputArray[i])
        }
      }
    } else {
      // even iteration
      // multiply pairs
      for (let i = 0; i < inputArray.length; i += 2) {
        if (inputArray[i + 1]) {
          modArr.push(inputArray[i] * inputArray[i + 1]);
        } else if (i === inputArray.length - 1) {
          modArr.push(inputArray[i])
        }
      }
    }
    inputArray = modArr;
  }

  return inputArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
