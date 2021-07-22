export function fancyRide(l: number, fares: number[]): string {
  // this array is from the question
  let rides: string[] = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
  let bestRide = '';

  fares.forEach((ride, index) => {
    if (ride * l <= 20) {
      bestRide = rides[index];
    }
  });

  return bestRide;
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));