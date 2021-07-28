export function findEmailDomain(address: string): string {
  const domain = address.split('@');
  return domain[domain.length - 1];
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
