export function houseOfCats(legs: number): number[] {
  return Math.floor(legs / 4) !== 0 ?
    [Math.floor(legs / 4), Math.floor(legs / 2)] :
    [Math.floor(legs / 2)];
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
