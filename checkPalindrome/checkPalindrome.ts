export function checkPalindrome(inputString: string): boolean {
  let original = inputString
  let reverse = inputString.split('').reverse().join('');

  return original === reverse;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
