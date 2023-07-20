function solution(brown, yellow) {
    // 노란색 약수 배열 -> 노란색의 number of row -> 가로가 긴 쪽 이므로 제곱근보다 작거나 같아야 함
    const arr = [];
    for (let i=1; i<=Math.sqrt(yellow); i++) {
        if (yellow % i == 0) arr.push(i)
    }
    // 배열 돌면서 갈색 수와 맞는지 확인
    let answer = [];
    arr.forEach(num => {
        let row = num + 2, col = (yellow / num) + 2
        if (row * col - yellow == brown) {
            answer = [col, row]
        }
    })
    return answer
}