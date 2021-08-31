export function switchLights(a: number[]): number[] {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {
      for (let j = i; j >= 0; j--) {
        a[j] = a[j] === 1 ? 0 : 1;
      }
    }
  }
  return a;
}

console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));
console.log(switchLights([0, 0, 1]));