export function findClosestPair(numbers: number[], sum: number): number {
  // if none found then will return -1
  let closestPair = -1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      // added a check to make sure it wasnt a single number but 0 is allowed
      if (numbers[i] !== sum || numbers[j] === 0 && numbers[j] !== sum) {
        // the base checks, finding if it equals the sum and then checking if it 
        // is less than the last pair
        if (numbers[i] + numbers[j] === sum) {
          if (closestPair === -1 || closestPair > i - j)
            closestPair = i - j;
        }
      }
    }
  }

  return closestPair;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([1, 0, 4, 2, 3, 0], 2));
console.log(findClosestPair([2, 3, 7], 8));