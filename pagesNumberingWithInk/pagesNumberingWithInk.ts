export function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
  let currentPage = current;
  let inkLeft = numberOfDigits;
  let pagesPrinted = 0;
  let partialPrint = currentPage;
  while (inkLeft > 0) {
    if ((partialPrint / 10) < 1) {
      pagesPrinted++;
      currentPage++;
      partialPrint = currentPage;
    } else {
      partialPrint /= 10;
    }
    inkLeft--;
  }

  return pagesPrinted;
}

console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));