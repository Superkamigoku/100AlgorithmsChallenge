export function pigLatin(str: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  if (vowels.includes(str[0])) {
    return str + 'way'
  }

  let i = 0;
  let constonantStr = '';
  let strArray = str.split('');
  while (vowels.includes(str[i]) === false) {
    constonantStr += str[i];
    i++;
  }

  strArray.splice(0, constonantStr.length);
  strArray.push(constonantStr + 'ay');

  return strArray.join('');
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
console.log(pigLatin("look"));
// in the
console.log(pigLatin("bag"));


// if starts with a vowel then add 'way' on end
// if starts with consonant then take consonants till next vowel, add them to the end and add 'ay' on the end;