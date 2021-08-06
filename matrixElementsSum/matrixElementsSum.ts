export function matrixElementsSum(matrix: any[][]): number {
  let priceTotal = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // adds the current number if it isnt a zero, else causes all later numbers to be zero
      if (matrix[i][j] !== 0) {
        priceTotal += matrix[i][j];
      } else {
        // have to check since cant skip the last row with the current setup
        if (matrix[i + 1]) {
          matrix[i + 1][j] = 0;
        }
      }
    }
  }

  return priceTotal;
}

console.log(matrixElementsSum(
  [[0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]]
));
