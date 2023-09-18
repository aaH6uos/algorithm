function solution(n) {
    let stack = [0, 1]
    for (let i=2; i<=n; i++) {
        let sum = stack[i-2] + stack[i-1]
        stack.push(sum % 1234567)
    }
    return stack.pop() % 1234567;
}