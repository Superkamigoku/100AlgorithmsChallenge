export function longestDigitsPrefix(inputString: string): string {
  let digitsPrefix = '';

  for (let char of inputString) {
    const num = parseInt(char);
    if (isNaN(num)) {
      return digitsPrefix;
    }
    digitsPrefix += char
  }
  return digitsPrefix;
}

console.log(longestDigitsPrefix('123aa1'));