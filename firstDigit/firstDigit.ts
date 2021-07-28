export function firstDigit(inputString: string): string {
  const firstDigitArr = inputString.split('');

  for (let i = 0; i < firstDigitArr.length; i++) {
    if (!isNaN(firstDigitArr[i])) {
      return firstDigitArr[i].toString();
    }
  }

}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
