export function containsCloseNums(nums: number[], k: number): boolean {
  let current = nums[0];
  for (let i = 0; i < nums.length - 1; i++) {
    // if Math.abs ever returns k then it is true
    if (Math.abs(nums[i] - nums[i + 1]) === k) {
      return true;
    }
  }
  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
console.log(containsCloseNums([0, 1, 2, 3, 5, 1], 3));