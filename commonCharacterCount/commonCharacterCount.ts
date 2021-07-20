export function commonCharacterCount(s1: string, s2: string): number {
  let arr1: string[] = s1.split('');
  let arr2: string[] = s2.split('');
  let count: number = 0;
  // simpler solution but if array is large then 'indexOf' can make it take too long
  if (arr2.length < 100) {
    for (let i = 0; i < arr1.length; i++) {
      // if arr2 has a same entry
      if (arr2.indexOf(arr1[i])) {
        // removes entry from array2
        arr2.splice(arr2.indexOf(arr1[i]), 1)
        count++;
      }
    }

  } else {
    // alternate solution
    // makes the arrays into objects so can use the hasOwnProperty method
    let arr1Char = getCharList(arr1);
    let arr2Char = getCharList(arr2);
    for (const prop in arr1Char) {
      if (arr2Char.hasOwnProperty(prop)) {
        // get the lower amount in prop if it exists in both
        if (arr1Char[prop] < arr2Char[prop]) {
          count += arr1Char[prop]
        } else {
          count += arr2Char[prop]
        }
      }
    }
  }
  return count;
}

function getCharList(array) {
  const wordCount = {};
  for (let i = 0; i < array.length; i++) {
    if (wordCount.hasOwnProperty(array[i])) {
      wordCount[array[i]]++;
    } else {
      wordCount[array[i]] = 1;
    }
  }
  return wordCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));