export function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
  let totalArr = [];
  // I had to put these as type any since typescript keeps thinking they are strings
  let costDist: any = 0;
  let costTime: any = 0;
  for (let i = 0; i < cost_per_minute.length; i++) {
    costDist = ride_distance * cost_per_mile[i]
    costTime = ride_time * cost_per_minute[i]
    totalArr.push((parseFloat(costDist + costTime)).toFixed(1))
  };

  return totalArr;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
