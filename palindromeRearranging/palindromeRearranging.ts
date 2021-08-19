export function palindromeRearranging(inputString: string): boolean {
  const palindromeObj = {};
  let uniqueLetter = false;

  // creates and adds to object so can count amount a char appears
  for (let i = 0; i < inputString.length; i++) {
    if (palindromeObj.hasOwnProperty(inputString[i])) {
      palindromeObj[inputString[i]]++
    } else {
      palindromeObj[inputString[i]] = 1;
    }
  }


  for (let letter in palindromeObj) {
    // one unique letter allowed
    if (palindromeObj[letter] % 2 !== 0) {
      if (uniqueLetter === true) {
        return false;
      }
      uniqueLetter = true;
    }
  }

  return true;
}

console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging('aacdbb'));