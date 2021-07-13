export function alphabeticShift(inputString: string): string {
  const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let inputArr = inputString.split('');
  let shiftedArr = [];
  let indexShifted = 0;

  inputArr.forEach((letter: string) => {
    indexShifted = alphabet.indexOf(letter) + 1;
    // turns a 'z' into an 'a'
    if (indexShifted === 26) {
      indexShifted = 0;
    }
    // add to shiftedArr
    shiftedArr.push(alphabet[indexShifted]);
  })

  // requires join method
  return shiftedArr.join('');
}



console.log(alphabeticShift('crazy'));

export function fasterAlphabeticShift(inputString: string): string {
  const alphabet: object = {
    a: 'b', b: 'c', c: 'd', d: 'e', e: 'f', f: 'g', g: 'h', h: 'i', i: 'j', j: 'k', k: 'l', l: 'm', m: 'n', n: 'o', o: 'p', p: 'q', q: 'r', r: 's', s: 't', t: 'u', u: 'v', v: 'w', w: 'x', x: 'y', y: 'z', z: 'a';
  }

  let inputShifted = inputString.split('');

  for (let i = 0; i < inputShifted.length; i++) {
    // uses the premade object to automatically replace the letter
    // this saves iterating through the whole alphabet array for every letter
    inputShifted[i] = alphabet[inputShifted[i]];
  }

  return inputShifted.join('');
}

console.log(fasterAlphabeticShift('crazy'));