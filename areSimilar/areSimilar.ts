export function areSimilar(a: number[], b: number[]): boolean {
  // course released before EcmaScript 2019
  // a.sort();
  // b.sort();
  if (a.length !== b.length) {
    return false;
  }

  a.forEach((e, aIndex) => {
    let bIndex;
    for (let i = 0; i < b.length; i++) {
      // for loop
      if (e === b[i]) {
        bIndex = i;
      }
    } {
      a.splice(aIndex, 1);
      b.splice(bIndex, 1);
    }
  })


  return a.toString() === b.toString();
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
