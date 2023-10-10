function solution(s) {
    const stack = [];
    for (let char of s) {
        let temp = stack[stack.length - 1];
        if (temp == char) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return stack.length == 0 ? 1 : 0;
}