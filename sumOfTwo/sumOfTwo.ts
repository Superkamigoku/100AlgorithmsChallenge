export function sumOfTwo(a: number[], b: number[], v: number): boolean {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      console.log(a[i] + b[j])
      if (a[i] + b[j] === v) {
        return true;
      }
    }
  }

  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));