export function largestOfFour(nums: number[][]): number[] {
  let largestArr = [];
  for (let numberList of nums) {
    // sorts highest to lowest then pushes the first in the array
    numberList.sort((a, b) => b - a);
    largestArr.push(numberList[0])
  }

  return largestArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));