function solution(a, b) {
    let sum = 0;
    const big = Math.max(a, b)
    const small = Math.min(a, b)
    for (let n=small; n<=big; n++) {
        sum += n
    }
    return sum
}