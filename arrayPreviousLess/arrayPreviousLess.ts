export function arrayPreviousLess(items: number[]): number[] {
  // the first number in the array is always -1
  let arr: number[] = [-1];

  // for single item arrays
  if (items.length === 1) {
    return arr
  }

  // i iterates through the array
  for (let i = 1; i < items.length; i++) {
    // j iterates through all the items before i in the array
    for (let j = 0; j < i; j++) {
      arr[i] = -1;
      if (items[i] > items[j]) {
        arr[i] = items[j];
      }
    }
  }
  return arr;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));