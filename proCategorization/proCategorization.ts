export function proCategorization(pros: string[], preferences: string[][]): string[][][] {
  const catagories = {};
  let i = 0;
  for (let i = 0; i < preferences.length; i++) {
    for (let j = 0; j < preferences[i].length; j++) {
      if (catagories.hasOwnProperty(preferences[i][j])) {
        catagories[preferences[i][j]].push(pros[i]);
      } else {
        catagories[preferences[i][j]] = [pros[i]];
      }
    }
  }

  let experts = [];
  for (let catagorie in catagories) {
    experts.push([[catagorie], catagories[catagorie]]);
  }

  experts = experts.sort((pref1, pref2) => {
    const pref1Lower = pref1[0][0].toLowerCase();
    const pref2Lower = pref2[0][0].toLowerCase();

    if (pref1Lower < pref2Lower) {
      return -1;
    }

    if (pref1Lower > pref2Lower) {
      return 1;
    }
    return 0;
  })


  return experts;
}

console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));