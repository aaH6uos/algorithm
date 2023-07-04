function solution(numbers) {
    let answer = Array(numbers.length).fill(-1);
    let stack = [];
    
    for (i in numbers) {
        // stack이 비었으면 push 안비었으면 비교
        while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
               answer[stack.pop()] = numbers[i]
               }
        stack.push(i)
    }
    return answer;
}