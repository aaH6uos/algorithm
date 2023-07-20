function solution(brown, yellow) {
    const arr = [];
    for (let i=1; i<=Math.sqrt(yellow); i++) {
        if (yellow % i == 0) arr.push(i)
    }
    let answer = [];
    arr.forEach(num => {
        let row = num + 2, col = (yellow / num) + 2
        if (row * col - yellow == brown) {
            answer = [col, row]
        }
    })
    return answer
}