export function squareDigitsSequence(a0: number): number {
  let digitToSquare = a0.toString();
  let uniqueNums = {};
  uniqueNums[digitToSquare] = 1;
  let count = 1;

  while (true) {
    count++
    let totalSquared = 0;
    for (let i = 0; i < digitToSquare.length; i++) {
      // squares each number in the digit and adds to total
      totalSquared += parseInt(digitToSquare[i]) * parseInt(digitToSquare[i]);
    }

    if (uniqueNums.hasOwnProperty(totalSquared)) {
      break;
    }
    // add to object after the break then reset the digit
    uniqueNums[totalSquared] = 1;
    digitToSquare = totalSquared.toString();
  }

  return count;
}


console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));