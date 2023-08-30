function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const charArr = [...alphabet].filter((char) => skip.indexOf(char) < 0);
    let answer = ''
    for (let char of s) {
        let idx = (charArr.indexOf(char) + index) % charArr.length
        answer += charArr[idx]
    }
    return answer;
}