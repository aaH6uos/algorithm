function solution(word) {
    // A로 시작하는 길이 1 -> 1
    // A로 시작하는 길이 2 -> 5
    // A로 시작하는 길이 3 -> 5**2
    // A로 시작하는 길이 4 -> 5**3
    // A로 시작하는 길이 5 -> 5**4
    // A로 시작 단어 수 => (5**5-1)/4
    const charArr = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    for (let i=0; i<word.length; i++) {
        let idx = charArr.indexOf(word[i]);
        answer += idx * (5 ** (5 - i) - 1) / 4 + 1
    }
    return answer;
}