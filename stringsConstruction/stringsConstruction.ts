export function stringsConstruction(a: string, b: string): number {
  let count = Math.floor(b.length / a.length);
  let countA = getAlphabetCount(a);
  let countB = getAlphabetCount(b);

  for (let letter in countA) {
    if (countB.hasOwnProperty(letter)) {
      if (count > countB[letter]) {
        count = countB[letter]
      }
    } else {
      // if property doesnt exist then return 0;
      return 0;
    }
  }

  return count;
}

function getAlphabetCount(word) {
  const chars = word.split('');
  const alphabetCount = {};

  for (let char in chars) {
    if (alphabetCount.hasOwnProperty(chars[char])) {
      alphabetCount[chars[char]] += 1;
    } else {
      alphabetCount[chars[char]] = 1;
    }
  }
  return alphabetCount;
}

console.log(stringsConstruction('abc', 'abaccb'));