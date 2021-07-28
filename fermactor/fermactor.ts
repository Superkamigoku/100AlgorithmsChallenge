// input is always semiprime number
export function fermactor(n: number): number[] {
  for (let i = 1; i < n; i++) {
    // limit j to i since it is always going to be less
    for (let j = 1; j < i; j++) {
      if (n === Math.pow(i, 2) - Math.pow(j, 2))
        return [i, j]
    }
  }
}

console.log(fermactor(15));