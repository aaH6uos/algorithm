function solution(number, limit, power) {
    const countDiv = (n) => {
        let cnt = 0;
        for (let d=1; d<Math.sqrt(n); d++) {
            if (n % d == 0) cnt++
        }
        return Number.isInteger(Math.sqrt(n)) ? cnt * 2 + 1 : cnt * 2
    }
    const arr = [];
    for (let n=1; n<=number; n++) {
        let cnt = countDiv(n)
        cnt <= limit ? arr.push(cnt) : arr.push(power)
    }
    return arr.reduce((a, b) => a+b)
}