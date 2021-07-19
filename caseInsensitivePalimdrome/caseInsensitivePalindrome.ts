export function isCaseInsensitivePalindrome(inputString: string): boolean {
  let original = inputString.toLowerCase();
  // uses the split to turn to array so can run reverse
  let reversed = original.split('').reverse().join('');

  return original === reversed;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));