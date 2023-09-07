function solution(queue1, queue2) {
    let sum1 = queue1.reduce((a, b) => a + b, 0);
    let sum2 = queue2.reduce((a, b) => a + b, 0);
    
    const queue = [...queue1, ...queue2];
    const len = queue.length;
    let point1 = 0;
    let point2 = queue1.length;
    let answer = 0;
    while (sum1 != sum2) {
        if (answer > len * 2) {
            answer = -1
            break;
        }
        if (sum1 > sum2) {
            let shift = queue[point1++ % len]
            sum1 -= shift
            sum2 += shift
        } else {
            let shift = queue[point2++ % len]
            sum2 -= shift
            sum1 += shift
        }
        answer++
    }
    return answer;
}