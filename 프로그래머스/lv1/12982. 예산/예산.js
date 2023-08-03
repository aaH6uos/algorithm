function solution(d, budget) {
    d.sort((a, b) => a - b)
    let cnt = 0;
    let sum = 0;
    for (let cost of d) {
        sum += cost
        if (sum > budget) break;
        cnt++
    }
    return cnt;
}