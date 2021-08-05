export function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
  let backupList = []

  for (let i = 0; i < changes.length; i++) {
    // some variables to make it a bit easier to read
    const currentBackupTime = changes[i][0];
    const currentId = changes[i][1];
    if (lastBackupTime < currentBackupTime) {
      // if there is no index of it in the backupList then it is new
      if (backupList.indexOf(currentId) === -1) {
        backupList.push(currentId);
      }
    }
  }
  backupList.sort();

  return backupList;
}

console.log(incrementalBackups(461620205, [[461620203, 1],
[461620204, 2],
[461620205, 6],
[461620206, 5],
[461620207, 3],
[461620207, 5],
[461620208, 1]]));
