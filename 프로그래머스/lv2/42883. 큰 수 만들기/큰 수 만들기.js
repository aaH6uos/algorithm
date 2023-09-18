function solution(number, k) {
    const stack = [];
    for (let n of number) {
        while (stack[stack.length - 1] < n && k > 0) {
            stack.pop();
            k--;
        };
        stack.push(n)
    }
    if (k > 0) stack.pop()
    return stack.join('');
}