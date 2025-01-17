export function containsCloseNums(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length - k; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j !== i && nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
console.log(containsCloseNums([0, 1, 2, 3, 5, 1], 1));