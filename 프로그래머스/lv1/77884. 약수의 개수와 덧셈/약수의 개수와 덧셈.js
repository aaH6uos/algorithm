function solution(left, right) {
    const countDivisor = (num) => {
        let cnt = 0;
        for (let i=1; i<num+1; i++) {
            if (num % i == 0) {
                cnt++
            }
        }
        return cnt
    }
    let answer = 0;
    for (let j=left; j<=right; j++) {
        countDivisor(j) % 2 ? answer -= j : answer += j
    }
    return answer;
}