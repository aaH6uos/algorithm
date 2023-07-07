function solution(n) {
    let answer = 0;
    const arr = [];
    while (n > 0) {
        arr.push(n % 3)
        n = Math.floor(n / 3)
    }
    arr.forEach((ele, idx) => {
        answer += ele * (3 ** (arr.length - idx - 1))
    })
    return answer
}