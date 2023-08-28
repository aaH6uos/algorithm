function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let boxCnt = Math.floor(score.length / m)
    let profit = 0;
    for (let i=m-1; i<score.length; i+=m) {
        profit += m * score[i];
    }
    return profit;
}