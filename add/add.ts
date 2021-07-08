export function add(param1: number, param2: number): number {
  return param1 + param2;
}

export function add2(...param1: number[]): number {
  let sum = 0;

  for (let param of param1) sum += param;

  return sum;

}
// console.log(add(1, 2));
// console.log(add(3, 2));

// console.log(add2(1,2,3,4,5));
// console.log(add2(2,3));
//