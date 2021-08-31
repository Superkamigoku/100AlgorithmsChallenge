export function validTime(time: string): boolean {
  let clock = time.split(':');
  let hour = parseInt(clock[0]);
  let minutes = parseInt(clock[1]);

  if (hour === 24 && minutes !== 0 || hour > 24 || minutes > 60) {
    return false;
  }
  return true;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));
console.log(validTime('24:00'));