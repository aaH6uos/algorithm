function solution(n) {
    // n을 삼진법으로 변환
    let reversed = [];
    while (n > 0) {
        if (n % 3 == 0) {
            reversed.push(4)
            n = Math.floor(n / 3) - 1
        } else {
            reversed.push(n % 3)
            n = Math.floor(n / 3)
        }
    }
    let answer = reversed.reverse().join('')
    return answer;
}