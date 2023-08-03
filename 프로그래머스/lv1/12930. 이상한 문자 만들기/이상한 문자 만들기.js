function solution(s) {
    let answer = '';
    const words = s.split(' ')
    words.forEach((word, i) => {
        word.split('').forEach((str, idx) => {
            idx % 2 == 0 ?
                answer += str.toUpperCase() : answer += str.toLowerCase()
        })
        if (i != words.length - 1) answer += ' '
    })
    return answer;
}