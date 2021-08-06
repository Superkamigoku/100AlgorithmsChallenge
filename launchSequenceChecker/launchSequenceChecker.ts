export function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {
  const sequenceCodes = {};

  for (let i = 0; i < systemNames.length; i++) {
    let currentCode = systemNames[i]
    // if it doesnt have the property then it is created,
    // if the property is less or equal to last then it returns false
    if (sequenceCodes.hasOwnProperty(currentCode)) {
      if (sequenceCodes[currentCode] >= stepNumbers[i]) {
        return false
      }
    }
    sequenceCodes[currentCode] = stepNumbers[i];
  }

  return true;
}

console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));