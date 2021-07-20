export function chunkyMonkey(arr, size) {
  let finalArr = [];
  let count = 0;
  while (count < arr.length) {
    // push, slice, and modifying count on the same line :D
    finalArr.push(arr.slice(count, count += size));
  }
  return finalArr;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));