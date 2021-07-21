export function crossingSum(matrix: number[][], a: number, b: number): number {
  // counts the whole row
  let rowTotal = matrix[a].reduce((a, b) => a + b);
  let columnTotal = 0;
  for (let i = 0; i < matrix.length; i++) {
    // goes through the rows and adds only the one on column b if it isnt on row a
    columnTotal += i !== a ? matrix[i][b] : 0;
  }

  return rowTotal + columnTotal;
}



console.log(crossingSum([[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3]], 1, 3));