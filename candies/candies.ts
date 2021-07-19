// i changed the variables since it isnt clear which number relates to what thing
export function candies(children: number, candy: number): number {
  // returns the amount of candy that is eaten if it is evenly split
  return Math.floor(candy / children) * children;
}

console.log(candies(3, 10));