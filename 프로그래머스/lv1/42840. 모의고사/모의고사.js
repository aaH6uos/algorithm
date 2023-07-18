function solution(answers) {
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];    
    let score = [0, 0, 0];
    
    answers.forEach((num, idx) => {
        if (num == one[idx % one.length]) {
            score[0]++
        }
        if (num == two[idx % two.length]) {
            score[1]++
        }
        if (num == three[idx % three.length]) {
            score[2]++
        }
    })
    
    const maxScore = Math.max(...score)    
    let answer = [];
    score.forEach((score, idx) => {
        if (score == maxScore) {
            answer.push(idx + 1)
        }
    })
    
    return answer;
}