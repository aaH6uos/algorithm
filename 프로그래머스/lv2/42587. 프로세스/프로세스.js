function solution(priorities, location) {
    let queue = priorities.map((priority, idx) => ({priority, idx}))
    let answer = [];
    while (queue.length) {
        let max = Math.max(...priorities)
        const process = queue.shift()
        if (process.priority == max) {
            answer.push(process.idx);
            priorities[process.idx] = 0
        } else {
            queue.push(process)
        }
    }
    return answer.indexOf(location) + 1
}