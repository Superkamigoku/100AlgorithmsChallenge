export function integerToStringOfFixedWidth(number: number, width: number): string {
  if (width <= 0) {
    return '';
  }

  let stringifiedNum = number.toString();

  // One of the methods below adds to string and one takes from it
  if (width > stringifiedNum.length) {
    stringifiedNum = stringifiedNum.padStart(width, '0')
  } else {
    stringifiedNum = stringifiedNum.slice(-width);
  }

  return stringifiedNum;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 6));
