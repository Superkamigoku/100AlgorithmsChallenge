export function stolenLunch(note: string): string {
  const cypherLetters = {
    a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9
  }
  const cypherNumbers = {
    0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j'
  }

  let decyphered = note.split('');
  let transformLetters = false;
  for (let i = 0; i < decyphered.length; i++) {

    if (!isNaN(parseInt(decyphered[i]))) {
      decyphered.splice(i, 1, cypherNumbers[decyphered[i]]);
    } else if (transformLetters === true) {
      if (cypherLetters.hasOwnProperty(decyphered[i]))
        decyphered.splice(i, 1, cypherLetters[decyphered[i]]);
    }

    // past the ':' the letters get transformed also
    if (decyphered[i] === ':') {
      transformLetters = true;
    }
  }

  return decyphered.join('');
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja");
// console.log(stolenLunch("123"));