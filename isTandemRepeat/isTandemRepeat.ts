export function isTandemRepeat(inputString: string): boolean {
  // if an odd amount then automatically false
  if (inputString.length % 2 === 1) {
    return false;
  }

  const half = inputString.length / 2;
  const firstHalf = inputString.slice(0, half);
  const secondHalf = inputString.slice(-half);

  return firstHalf === secondHalf;
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
console.log(isTandemRepeat('2w2w2w'))
