function solution(array, commands) {
    const answer = commands.map((cmd) => {
        const arr = array.slice(cmd[0] - 1, cmd[1]).sort((a, b) => a - b)
        return arr[cmd[2] - 1]
    })
    return answer;
}