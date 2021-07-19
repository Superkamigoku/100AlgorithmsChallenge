export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const board = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8
  }
  // the 'numbers' are of type 'string' so they need to be converted
  // can use modular here to simplify them to 0 and 1;
  let total1 = board[cell1.charAt(0)] % 2;
  let total2 = parseInt(cell1.charAt(1)) % 2;
  let total3 = board[cell2.charAt(0)] % 2;
  let total4 = parseInt(cell2.charAt(1)) % 2;

  // if modular by 2 it is the same colour
  return (total1 + total2 + total3 + total4) % 2 === 0;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));