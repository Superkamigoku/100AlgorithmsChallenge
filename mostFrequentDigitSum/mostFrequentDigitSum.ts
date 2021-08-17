export function mostFrequentDigitSum(n: number): number {
  // first step with recursive function that adds to array how much it takes from number
  function stepOperation(num, arr) {
    let sumArr = arr;
    let currentSum = 0;
    num.toString().split('').forEach((number) => {
      currentSum += parseInt(number)
    })
    let currentNum = num - currentSum;
    sumArr.push(currentSum);
    if (currentSum !== 0) {
      stepOperation(currentNum, sumArr)
    }
    return sumArr;
  }
  let sumArr = stepOperation(n, []);

  // second step iterates through array to add to object,
  // necessary since values fluctuate in certain numbers
  let bestCountObj = {};
  for (let i = 0; i < sumArr.length; i++) {
    if (bestCountObj.hasOwnProperty(sumArr[i])) {
      bestCountObj[sumArr[i]] += 1;
    } else {
      bestCountObj[sumArr[i]] = 1;
    }
  }

  // third step is iterating through object to find the key with the greatest value
  // since keys are integers they are automatically sorted from low to high
  let mostFrequent = 0;
  let bestCount = 0;
  for (let count in bestCountObj) {
    if (bestCountObj[count] >= bestCount) {
      mostFrequent = parseInt(count);
      console.log(mostFrequent)
      bestCount = bestCountObj[count];
    }
  }

  return mostFrequent;
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));
console.log(mostFrequentDigitSum(92312));