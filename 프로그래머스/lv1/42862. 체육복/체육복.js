function solution(n, lost, reserve) {
  let answer = 0;
  const newReserve = reserve.sort((a, b) => a - b).filter(student => !lost.includes(student))
  const newLost = lost.sort((a, b) => a - b).filter(student => !reserve.includes(student))
  for (let i of newLost) {
      let idx = newReserve.findIndex(j => Math.abs(i - j) == 1)
      if (idx != -1) {
          newReserve.splice(idx, 1)
          answer += 1
      }
  }
  return n - newLost.length + answer;
}