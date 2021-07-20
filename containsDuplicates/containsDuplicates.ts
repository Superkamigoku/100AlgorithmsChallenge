export function containsDuplicates(a: number[]): boolean {
  // make object that stores if that value has appeared
  let duplicateObj = {};
  for (let i = 0; i < a.length; i++) {
    if (duplicateObj[a[i]]) {
      return true
    } else {
      duplicateObj[a[i]] = 1;
    }
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
