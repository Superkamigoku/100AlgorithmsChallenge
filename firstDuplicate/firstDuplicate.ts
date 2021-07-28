export function firstDuplicate(a: number[]): number {
  let duplicates = {};

  for (let i = 0; i < a.length; i++) {
    let current = parseInt(a[i]);
    // if already on object then return the number
    if (duplicates[current] === 1) {
      return current;
    }
    // if not on object then it is unique (so far)
    duplicates[current] = 1;
  }

  // if none found then return -1
  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
