export function sortByHeight(a: number[]): number[] {
  let filterHeights = a.filter((height) => height !== -1).sort((a, b) => a - b);

  let j = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = filterHeights[j];
      j++;
    }
  }

  return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));