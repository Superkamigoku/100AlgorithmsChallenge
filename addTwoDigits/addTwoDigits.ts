export function addTwoDigits(n: any): number {
  const numbers = n.toString().split('');

  // simply parseInt the items in the array else it just concatenates
  let total = parseInt(numbers[0]) + parseInt(numbers[1]);
  return total;
}
console.log(addTwoDigits(29));


// Since the instructor went overboard, his solution works with any length (of digits)
export function addTwoOrMoreDigits(n: any): number {
  const numbers = n.toString().split('');

  // using the reduce function you can run until the
  // end of an array (like a for loop);
  return numbers.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b);
  })

  // This does the same as above. The main difference being
  // that you need to create a variable for the total.
  // let total = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   total += parseInt(numbers[i]);
  // }
  // return total;
}
console.log(addTwoOrMoreDigits(12345));