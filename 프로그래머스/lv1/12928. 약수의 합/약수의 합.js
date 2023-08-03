function solution(n) {
    let answer = 0;
    for (let d=1; d<=n; d++) {
        if (n % d == 0) answer += d
    }
    return answer;
}