export function largestOfFour(nums: number[][]): number[] {
  let largestArr = [];
  for (let i = 0; i < nums.length; i++) {
    // sorts highest to lowest then pushes the first in the array
    nums[i].sort((a, b) => b - a);
    largestArr.push(nums[i][0])
  }

  return largestArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));