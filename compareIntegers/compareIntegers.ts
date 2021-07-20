export function compareIntegers(a: string, b: string): string {
  return parseInt(a) === parseInt(b) ? 'equal' : parseInt(a) < parseInt(b) ? 'less' : 'greater'
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));