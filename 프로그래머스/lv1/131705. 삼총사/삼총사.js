function solution(number) {
    const len = number.length;
    let answer = 0;
    for (let i=0; i<len-2; i++) {
        for (let j=i+1; j<len-1; j++) {
            for(let k=j+1; k<len; k++) {
                if (number[i] + number[j] + number[k] == 0) {
                    answer += 1
                }
            }
        }
    }
    return answer
}