export function missingLetters(str: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let missingLetterStr = '';
  // defines the letter range
  let start = alphabet.indexOf(str[0]);
  const end = alphabet.indexOf(str[str.length - 1]);


  console.log(start, end);
  for (let i = start; i <= end; i++) {
    if (str.indexOf(alphabet[i]) === -1) {
      missingLetterStr += alphabet[i];
    }
  }

  if (missingLetterStr === '') {
    return undefined;
  }
  return missingLetterStr;
}

console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdejfghklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));