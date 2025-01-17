export function reflectString(inputString: string): string {
  let reflection = [];
  let alphabet = {
    a: 'z', b: 'y', c: 'x', d: 'w', e: 'v', f: 'u', g: 't', h: 's', i: 'r', j: 'q', k: 'p', l: 'o', m: 'n', n: 'm', o: 'l', p: 'k', q: 'j', r: 'i', s: 'h', t: 'g', u: 'f', v: 'e', w: 'd', x: 'c', y: 'b', z: 'a'
  }
  for (let i = 0; i < inputString.length; i++) {
    reflection.push(alphabet[inputString[i]])
  }

  return reflection.join('');
}

console.log(reflectString("name"));
console.log(reflectString("abcdefghijklmnopqrstuvwxyz"));
console.log(reflectString("zyxwvutsrqponmlkjihgfedcba"));