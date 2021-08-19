export function properNounCorrection(noun: string): string {
  let firstLetter = noun[0].toUpperCase();
  return firstLetter.concat(noun.toLowerCase().slice(1, noun.length));
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));