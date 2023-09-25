function solution(numbers, target) {
    const len = numbers.length
    var answer = 0;
    const dfs = (idx, sum) => {
        if (idx == len) {
            if (sum == target) {
                answer++
            }
            return
        }
        let next = numbers[idx]
        dfs(idx + 1, sum + next)
        dfs(idx + 1, sum - next)
    }
    
    dfs(0,0)
    return answer;
}