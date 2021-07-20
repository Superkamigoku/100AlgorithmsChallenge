export function composeRanges(nums: number[]): string[] {
  let arr = [];
  let chars = ''
  for (let i = 0; i < nums.length; i++) {
    if (chars === '') {
      // init first number
      chars = nums[i] + '';
    }
    if (nums[i] + 1 !== nums[i + 1] && parseInt(chars) !== nums[i]) {
      // if target then push it into array
      chars += '->' + nums[i];
      arr.push(chars);
      chars = '';
    } else if (nums[i] + 1 !== nums[i + 1] && parseInt(chars) === nums[i]) {
      // else just push the single number into array
      arr.push(chars)
      chars = '';
    }
  }
  return arr;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));