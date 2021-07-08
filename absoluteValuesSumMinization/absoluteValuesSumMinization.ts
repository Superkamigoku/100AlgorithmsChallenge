// export function absoluteValuesSumMinimization(a: number[]): number {
//     let arrayLength = a.length;
//     if (arrayLength % 2 === 0) {
//         arrayLength = arrayLength / 2;
//     } else {
//         arrayLength = Math.floor(arrayLength / 2) + 1;
//     }
//     let num = a[arrayLength];
//     return num;
// }

export function absoluteValuesSumMinimization(a: number[]): number {
    const isEven = a.length % 2 === 0;

    //get the median, if it is even then choose the leftmost one
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)]
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));