function solution(s) {
    let cntZero = 0, cnt = 0
    const transfer = (s) => {
        let temp = s.replaceAll('0', '').length
        cntZero += s.length - temp
        cnt++
        return Number(temp).toString(2)
    }
    while (s != 1) {
        s = transfer(s)
    }
    return [cnt, cntZero];
}