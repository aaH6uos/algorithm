function solution(left, right) {
    let answer = 0;
    for (let j=left; j<=right; j++) {
        if (Number.isInteger(Math.sqrt(j))) {
            answer -= j
        } else {
            answer += j
        }
    }
    return answer;
}