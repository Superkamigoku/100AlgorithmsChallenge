export function makeArrayConsecutive2(statues: number[]): number {
  const sortedStatues = statues.sort((a, b) => a - b);
  let neededStatues = 0;

  // adds a neededStatues for the difference between the current and the next, minus one for the accepted increment
  for (let i = 0; i < sortedStatues.length - 1; i++) {
    neededStatues += sortedStatues[i + 1] - sortedStatues[i] - 1;
  }

  return neededStatues;
}
0
console.log(makeArrayConsecutive2([6, 2, 3, 8]));