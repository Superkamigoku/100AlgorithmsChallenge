export function factorializeANumber(num: number): number {
  let factorial = 1;

  for (let i = 2; i <= num; i++) {
    factorial *= i;
  };

  return factorial;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));