export function confirmEnding(str: string, target: string) {
  const sub = str.substring(target.length - 1);
  return sub === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));