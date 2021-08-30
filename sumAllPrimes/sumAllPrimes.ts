export function sumAllPrimes(num: number): number {
  let primesArray = [];

  for (let currentNum = 1; currentNum <= num; currentNum++) {
    let isPrime = true;
    let twoDivisors = 0;
    console.log(currentNum)
    for (let upToCurrentNum = 1; upToCurrentNum <= currentNum; upToCurrentNum++) {
      if (currentNum % upToCurrentNum === 0) {
        twoDivisors += 1;
      }
      if (twoDivisors > 2) {
        isPrime = false;
        // break;
      }
    }

    if (isPrime) {
      primesArray.push(currentNum);
    }

  }

  return primesArray.reduce((a, b) => a + b);
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(4));
console.log(sumAllPrimes(977));