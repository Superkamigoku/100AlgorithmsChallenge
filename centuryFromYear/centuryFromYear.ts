export function centuryFromYear(year: number): string {
  return Math.ceil(year / 100) + "th"
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));