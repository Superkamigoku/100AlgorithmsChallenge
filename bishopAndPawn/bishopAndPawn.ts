export function bishopAndPawn(bishop: string, pawn: string): boolean {
  const stringConvert: object = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8
  }
  let bishopArr = bishop.split('');
  let pawnArr = pawn.split('');
  // Using math.abs you get a positive number nomatter what ;D
  let move = Math.abs(bishop[1] - pawn[1]);
  // if the letter math.abs is the same as the number it is always true (since that makes a diagonal)
  if (Math.abs(stringConvert[bishop[0]] - stringConvert[pawn[0]]) === move) {
    return true;
  }
  return false;
}

console.log(bishopAndPawn('a1', 'c3'));