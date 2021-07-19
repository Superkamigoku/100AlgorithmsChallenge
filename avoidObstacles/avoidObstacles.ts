export function avoidObstacles(inputArray: number[]): number {
  // quick sort to get the largest number for loop length limit
  inputArray.sort();
  let largest = inputArray[inputArray.length - 1];

  // if divisible then return jump
  for (let jump = 2; jump <= largest; jump++) {
    if (inputArray.every((element) => element % jump !== 0)) {
      return jump;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));