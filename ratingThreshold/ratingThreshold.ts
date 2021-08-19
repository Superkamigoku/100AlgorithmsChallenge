export function ratingThreshold(threshold: number, ratings: number[][]): number[] {
  let toBeReviewed = [];

  // goes through each pro and if under threshold, it pushes
  for (let i = 0; i < ratings.length; i++) {
    let totalRating = 0;
    for (let j = 0; j < ratings[i].length; j++) {
      totalRating += ratings[i][j];
    }
    if (totalRating / ratings[i].length < threshold) {
      toBeReviewed.push(i);
    }
  }

  return toBeReviewed;
}

console.log(ratingThreshold(3.5,
  [[3, 4],
  [3, 3, 3, 4],
  [4],
  [4, 2, 1]]));