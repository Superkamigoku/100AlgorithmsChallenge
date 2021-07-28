export function firstNotRepeatingCharacter(s: string): string {
  for (let i = 0; i < s.length; i++) {
    // looks at the index of the first instance of the char in the string
    // if same as last index then it is unique
    // since going forward thru loop it is the first unique
    if (s.indexOf(s[i]) === i && s.lastIndexOf(s[i]) === i) {
      return s[i];
    }
  }
  return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
