function solution(arr) {
    const answer = [];
    for (let nbr of arr) {
        if (answer[answer.length-1] != nbr) answer.push(nbr)
    }
    return answer
}