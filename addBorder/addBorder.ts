export function addBorder(picture: string[]): any {
  // build a wall
  const wall = '*'.repeat(picture[0].length + 2);

  // wall the front and back of the array
  picture.unshift(wall);
  picture.push(wall);

  // put up a wall on the sides
  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = `*${picture[i]}*`;
  }

  return picture;
}

console.log(addBorder(["abc", "ded"]));