export function evenDigitsOnly(n): boolean {
  // This would be much easier if i used arrays but i wanted to try it without
  // requires a lot of variables because they need to be modified
  // numberLength starts at 0 so i can change it at the start of the loop
  let number = n;
  let numberParity = 2;
  let numberStr = '';
  let numberLength = 0;
  // if parity is higher than the number then it passed all the tests
  while (numberParity < number) {
    if (number % numberParity === 0) {
      numberParity *= 10;
      numberLength++;
      numberStr = number.toString();
      // each loop i take off the last digit but it doesnt remove the 0 that is left over
      number -= parseInt(numberStr[numberStr.length - numberLength]) * (Math.pow(10, numberLength) / 10)
    } else {
      // fail parity test
      return false;
    }
  }

  return true;
}

function extraEvenDigitsOnly(n: number): boolean {
  // basicailly the same as what i did above but skipping the unneeded modifying
  const sN: string = n.toString();
  // iterates through each number seeing if it is divisible by 2
  for (let i = 0; i < sN.length; i++) {
    if (parseInt(sN[i]) % 2 !== 0) {
      return false;
    }
  }

  return true;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
console.log(extraEvenDigitsOnly(248622));
console.log(extraEvenDigitsOnly(642386));