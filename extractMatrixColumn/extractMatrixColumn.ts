export function extractMatrixColumn(matrix: number[][], column: number): number[] {
  let columnArr: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    columnArr.push(matrix[i][column])
  }

  return columnArr;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));