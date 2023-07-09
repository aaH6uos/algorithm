function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((abs, idx) => {
        if (signs[idx]) {
            answer += abs
        } else {
            answer -= abs
        }
    })
    return answer;
}