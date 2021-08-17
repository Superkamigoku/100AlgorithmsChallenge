export function newNumeralSystem(number: string): string[] {
  if (number === 'A') {
    // else A will return ['A+A']
    return ['A'];
  }

  let numerals: string[] = [];
  let startCharCount = 65;
  let endCharCount = number.charCodeAt(0);

  while (startCharCount <= endCharCount) {
    const numeral = `${String.fromCharCode(startCharCount)} + ${String.fromCharCode(endCharCount)}`
    numerals.push(numeral);
    startCharCount++;
    endCharCount--;
  }

  return numerals;
}

console.log(newNumeralSystem('G'));