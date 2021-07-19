export function boxBlur(image: number[][]): number[][] {
  let sum = 0;
  let arrAmount = 0;
  // gets the total amount in the array and the amount of numbers in the array
  image.forEach((element, index, array) => {
    for (let i = 0; i < array.length; i++) {
      sum += image[index][i];
      arrAmount += 1;
    }
  });

  // creating the final image
  // remove edges and round the middle numbers
  let finalImg: number[][] = [];
  let imgLine: number[] = [];
  const blurredAmount = Math.floor(sum / arrAmount)
  // runs on everything in the middle and converts them to the blurredAmount
  image.forEach((element, index, array) => {
    if (index > 0 && index < element.length - 1) {
      for (let i = 1; i < array.length - 1; i++) {
        imgLine.push(blurredAmount);
        if (i === array.length - 2) {
          finalImg.push(imgLine);
          imgLine = [];
        }
      }
    }
  });

  return finalImg;
}

console.log(boxBlur([[1, 1, 1],
[1, 7, 1],
[1, 1, 1]]));

console.log(boxBlur([[1, 1, 1, 1],
[1, 7, 7, 1],
[1, 7, 7, 1],
[1, 1, 1, 1]]));