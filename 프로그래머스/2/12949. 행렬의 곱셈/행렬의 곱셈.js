function solution(arr1, arr2) {
    const answer = []
    const rows = arr1.length, cols = arr2[0].length;
    for (let i=0; i<rows; i++) {
        const row = [];
        for (let j=0; j<cols; j++) {
            let sum = arr1[i].reduce((sum, num, idx) => (
                sum + num * arr2[idx][j]
            ), 0);
            row.push(sum)
        }
        answer.push(row)
    }
    return answer;
}