export function electionsWinners(votes: number[], k: number): number {
  const sortedVotes = votes.sort();
  const mostVotes = sortedVotes[sortedVotes.length - 1];
  let inTheRunning = 0;
  for (let i = 0; i < sortedVotes.length; i++) {
    if (sortedVotes[i] + k > mostVotes) {
      inTheRunning++
    }
  }
  return inTheRunning;
}

console.log(electionsWinners([2, 3, 5, 2], 3));