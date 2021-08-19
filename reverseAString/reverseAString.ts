export function reverseAString(str: string): string {
  let reverseStr = '';

  // starts at 1 since length -1 is the last char
  for (let i = 1; i < str.length + 1; i++) {
    reverseStr += str[str.length - i];
  }
  return reverseStr;
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));