function solution(s) {
    let answer = 0;
    let initCnt = 0, diffCnt = 0, initStr;
    for (let char of s) {
        if (!initStr) {
            initStr = char
            initCnt++
        } else {
            char == initStr ? initCnt++ : diffCnt++
        }
        if (initCnt == diffCnt) {
            answer++;
            initCnt = 0
            diffCnt = 0
            initStr = undefined
        }
    }
    if (initStr) answer++
    return answer;
}