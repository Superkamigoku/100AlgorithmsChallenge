export function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number | string {
  if (upSpeed < downSpeed) {
    return 'The plant will never grow to the desired height'
  };

  let plantHeight = 0;
  const maxDays = desiredHeight / (upSpeed - downSpeed);

  for (let days = 1; days <= maxDays; days++) {
    // grows during day
    plantHeight += upSpeed;
    if (plantHeight >= desiredHeight) {
      return days;
    }
    // shrinks at night
    plantHeight -= downSpeed;
  }
}

console.log(growingPlant(100, 10, 910));
console.log(growingPlant(10, 1, 1000));
console.log(growingPlant(15, 11, 910));
console.log(growingPlant(5, 2, 100));