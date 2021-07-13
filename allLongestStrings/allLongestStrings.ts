export function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;
  let longestWords = [];

  // finds the longest length of a string
  inputArray.forEach((word: string) => {
    longestLength = longestLength > word.length ? longestLength : word.length;
  })

  // add to longest words
  inputArray.forEach((word: string) => {
    if (word.length === longestLength) {
      longestWords.push(word);
    }
  })

  return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));