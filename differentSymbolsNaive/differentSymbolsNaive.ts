export function differentSymbolsNaive(s: string): number {
  //Could use sets or an object instead of this solution (which would work better)
  //but wanted to try something different
  const uniqueChars: string[] = [];
  const inputChars: string[] = s.split('');

  inputChars.forEach((char) => {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  });

  return uniqueChars.length;
}

console.log(differentSymbolsNaive('cabca'));
