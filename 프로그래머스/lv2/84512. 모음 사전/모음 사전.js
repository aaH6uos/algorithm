function solution(word) {
    const charArr = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    for (let i=0; i<word.length; i++) {
        let idx = charArr.indexOf(word[i]);
        answer += idx * (5 ** (5 - i) - 1) / 4 + 1
    }
    return answer;
}