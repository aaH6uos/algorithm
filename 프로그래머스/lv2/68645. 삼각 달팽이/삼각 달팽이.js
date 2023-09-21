function solution(n) {
    var answer = Array(n).fill().map((ele, idx) => (Array(idx + 1).fill(0)));
    const lastNum = n * (n + 1) / 2;
    let i=0, j=0, cnt=1;
    while (cnt <= lastNum) {
        while (i < n && !answer[i][j]) {
            answer[i++][j] = cnt++
        }
        i--; j++;
        while (j < n && !answer[i][j]) {
            answer[i][j++] = cnt++
        }
        i--; j-=2;
        while (i > 0 && !answer[i][j]) {
            answer[i--][j--] = cnt++
        }
        i+=2; j++;
    }
    return answer.flat();
}