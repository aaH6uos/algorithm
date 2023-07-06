function solution(numbers) {
    let stack = [];
    
    for (i in numbers) {
        while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
               numbers[stack.pop()] = numbers[i]
               }
        stack.push(i)
    }
    for (i of stack) {
        numbers[i] = -1
    }
    return numbers;
}