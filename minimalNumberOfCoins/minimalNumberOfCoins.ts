export function minimalNumberOfCoins(coins: number[], price: number): number {
  let minCoins = 0;
  let deductedPrice = price;
  coins.sort((a, b) => b - a);

  for (let i = 0; i < coins.length; i++) {
    // if you dont check for 0 and it exists then it will return infinity, which isnt very nice ;D
    if (coins[i] > 0) {
      const coinsNeeded = Math.floor(deductedPrice / coins[i])
      if (coinsNeeded > 0) {
        minCoins += coinsNeeded;
        deductedPrice = deductedPrice % coins[i];
      }
      if (deductedPrice === 0) {
        return minCoins;
      }
    }
  }

  // if it gets through the loop without returning it will require 1 more coin
  if (coins[coins.length - 1] !== 0) {
    return minCoins += 1;
  } else {
    return 0;
  }
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));
console.log(minimalNumberOfCoins([0], 28));