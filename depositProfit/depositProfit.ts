export function depositProfit(deposit: number, rate: number, threshold: number): number {

  let years = 0;
  let currentDeposit = deposit;
  while (currentDeposit < threshold) {
    currentDeposit *= ((rate / 100) + 1);
    years++;
  }
  return years;
}

console.log(depositProfit(100, 20, 170))