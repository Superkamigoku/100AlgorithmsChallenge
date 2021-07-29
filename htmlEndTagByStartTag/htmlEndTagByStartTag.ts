export function htmlEndTagByStartTag(startTag: string): string {
  // requires 2 splits because it might have extra variables after the tag
  const splitArr = startTag.split(' ');
  let htmlTag = splitArr[0].split('');

  // adds the extra parts of end tag
  htmlTag.splice(1, 0, '/');
  if (htmlTag[htmlTag.length - 1] !== '>') {
    htmlTag.push('>');
  }
  return htmlTag.join('');
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));