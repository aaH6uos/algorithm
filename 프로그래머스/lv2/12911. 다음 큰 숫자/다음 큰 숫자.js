function solution(n) {
    const countOne = (n) => n.toString(2).split('').filter(num => num == 1).length
    const nCnt = countOne(n)
    while (true) {
        let numCnt = countOne(++n)
        if (numCnt == nCnt) {
            return n
        }
    }
}