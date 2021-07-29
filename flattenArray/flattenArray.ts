export function flattenArray(arr: any[]): any[] {
  const singleArr = [];

  flatten(arr);

  // recursive function, calls itself until the element isnt an array, then pushes it
  function flatten(array: any[]) {
    array.forEach((element) => {
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        singleArr.push(element);
      }
    })
  }

  return singleArr;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
