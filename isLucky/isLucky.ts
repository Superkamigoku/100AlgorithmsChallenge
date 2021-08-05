// assumes an even number of digits
// lucky is defined as first half of numbers equals the second half of numbers
export function isLucky(n: number): boolean {
  const inputToString = n.toString();
  const halfway = inputToString.length / 2;
  const firstHalf = inputToString.slice(0, halfway);
  const secondHalf = inputToString.slice(-halfway);
  let firstTotal = 0;
  let secondTotal = 0;

  for (let i = 0; i < halfway; i++) {
    firstTotal += parseInt(firstHalf[i]);
    secondTotal += parseInt(secondHalf[i]);
  }

  return firstTotal === secondTotal;
}

console.log(isLucky(1230));
console.log(isLucky(239017));