export function uniqueDigitProducts(a: number[]): number {
  let uniques = {};
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    const currentNumArr = a[i].toString().split('');
    let multiple = 1;
    for (let j = 0; j < currentNumArr.length; j++) {
      multiple *= parseInt(currentNumArr[i]);
    }

    if (!uniques.hasOwnProperty(multiple)) {
      uniques[multiple] = 1;
      total++;
    }
  }

  return total;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));