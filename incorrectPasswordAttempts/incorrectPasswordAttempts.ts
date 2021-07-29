export function incorrectPasscodeAttempts(passcode: string, attempts: string[]): string {
  let failedAttempts = 0;
  for (let i = 0; i < attempts.length; i++) {
    attempts[i] === passcode ? failedAttempts = 0 : failedAttempts++;
    // fails if 10 in a row
    if (failedAttempts === 10) {
      return 'Locked out of Account'
    }
  }

  // if last attempt fails then logged out
  if (attempts[attempts.length - 1] === passcode) {
    return 'Logged In'
  } else {
    return 'Logged Out';
  }
}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));
console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "1111", "7777", "0000", "6666", "7285", "5555", "1111"]));
console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "1111", "7777", "0000", "6666", "7285", "5555", "1112"]));