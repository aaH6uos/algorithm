function solution(ingredient) {
    let answer = 0;
    const stack = [];
    for (ele of ingredient) {
        stack.push(ele);
        const last = stack.slice(-4).join('')
        if (last == '1231') {
            stack.splice(-4, 4)
            answer += 1
        }
    }
    return answer;
}