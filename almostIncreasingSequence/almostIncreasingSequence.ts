export function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
        // makes it so that the number always has to be increasing as the first
        // console.log would pass otherwise.
        return false;
      }
    }
  }

  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 1, 2]))
console.log(almostIncreasingSequence([1, 2, 3, 2, 4]))
console.log(almostIncreasingSequence([1, 3, 2]))