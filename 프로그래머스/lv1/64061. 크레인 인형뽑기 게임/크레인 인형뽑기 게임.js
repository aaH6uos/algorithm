function solution(board, moves) {
    const n = board.length
    let newBoard = [];
    for (let i=0; i<n; i++) {
        let stack = [];
        for (let j=n-1; j>=0; j--) {
            if (board[j][i] == 0) {
                break;
            }
            stack.push(board[j][i])
        }
        newBoard.push(stack)
    }
    let arr = [];
    let answer = 0;
    for (num of moves) {
        const newNum = newBoard[num-1].pop()
        if (arr.slice(-1) == newNum) {
            arr.pop()
            answer += 2;
        } else {
            arr.push(newNum)
        }
    }
    return answer;
}