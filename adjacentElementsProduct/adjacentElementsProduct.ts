export function adjacentElementsProduct(inputArray: number[]): number {

  // Before starting the for loop i set the largest variable 
  // to what would have been the first loop. This solves 
  // the issue of no number being greater than zero in a case
  let largest = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    let current = inputArray[i] * inputArray[i + 1];
    if (largest < current) {
      largest = current;
    }
  }
  return largest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([-3, 6, -2, 5, -7, 3]));