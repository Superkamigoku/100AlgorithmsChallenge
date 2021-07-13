export function alphabetSubsequence(s: string): boolean {
  // break string down
  const arr: string[] = s.split('');
  // create a set for its methods
  const set1 = new Set();

  for (let i = 0; i < arr.length; i++) {
    set1.add(arr[i]);
  }
  // if multiple then return false
  if (set1.size !== arr.length) {
    return false;
  }

  // no multiples
  for (let i = 0; i < arr.length - 1; i++) {
    // the letter has to be greater than the letter before it (according to char codes)
    if (arr[i].charCodeAt() > arr[i + 1].charCodeAt()) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
