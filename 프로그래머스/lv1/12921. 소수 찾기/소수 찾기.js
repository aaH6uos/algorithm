function solution(n) {
    const numArr = new Array(n).fill(1)
    for (let i=2; i<=Math.sqrt(n); i++) {
        for (let j=2*i; j<=n; j+=i) {
            numArr[j-1] = 0
        }
    }
    return numArr.reduce((a, b) => a + b) - 1
}