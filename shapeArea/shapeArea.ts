export function shapeArea(n: number): number {
  let area = 1;
  while (n > 1) {
    area += (n - 1) * 4;
    n--;
  }
  return area;
}

console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));