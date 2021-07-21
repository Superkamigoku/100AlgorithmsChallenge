export function convertString(s: string, t: string): boolean {
  let word = '';

  // init j here since it doesnt need to be a loop
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[j]) {
      // loop iterates through first string to find letters of second string
      word = word.concat(s[i]);
      j++;
    }
  }
  return word === t;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
