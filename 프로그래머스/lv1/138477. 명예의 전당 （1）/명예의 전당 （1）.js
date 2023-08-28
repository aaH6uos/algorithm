function solution(k, scores) {
    let fame = [];
    let answer = [];
    scores.forEach((score, idx) => {
            fame.push(score)
            fame.sort((a, b) => b - a)
        if (fame.length > k) {
            fame.pop()
        }
        answer.push(fame[fame.length - 1])
    })
    for (let score of scores) {
    }
    return answer;
}