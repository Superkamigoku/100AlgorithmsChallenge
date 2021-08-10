export function minesweeper(matrix: boolean[][]): number[][] {
  let minesMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    // inits the matrix that will be returned
    minesMatrix[i] = matrix[i].slice();
    for (let j = 0; j < matrix[i].length; j++) {
      // then transform it to numbers
      minesMatrix[i][j] = 0;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // variables to make it easier to read below, unfortunately cannot declare them early
      // since they need i and j
      let top = i > 0;
      let bottom = i < matrix.length - 1;
      let left = j > 0;
      let right = j < matrix[i].length - 1;
      if (matrix[i][j] === true) {
        // make minesweeper
        // top left, top middle, top right,
        // middle left, middle, middle right,
        // bottom left, bottom middle, bottom right;
        // checks are necessary else it throws an error if the array part doesnt exist
        if (top && left) { minesMatrix[i - 1][j - 1] += 1 }
        if (top) { minesMatrix[i - 1][j] += 1 }
        if (top && right) { minesMatrix[i - 1][j + 1] += 1 }
        if (left) { minesMatrix[i][j - 1] += 1 }
        // middle doesnt require a check
        minesMatrix[i][j] += 1
        if (right) { minesMatrix[i][j + 1] += 1 }
        if (bottom && left) { minesMatrix[i + 1][j - 1] += 1 }
        if (bottom) { minesMatrix[i + 1][j] += 1 }
        if (bottom && right) { minesMatrix[i + 1][j + 1] += 1 }
      }
    }
  }

  return minesMatrix;
}

console.log(minesweeper([[true, false, false],
[false, true, false],
[false, false, false]]));

console.log(minesweeper([[false, false, false, false],
[false, false, false, false],
[true, true, false, false],
[true, true, false, false]]));