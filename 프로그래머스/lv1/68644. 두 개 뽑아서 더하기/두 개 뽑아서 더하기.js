function solution(numbers) {
    const result = new Set();
    numbers.forEach((nbr, idx) => {
        for (let i=idx+1; i<numbers.length; i++) {
            result.add(nbr + numbers[i])
        }
    })
    const answer = [...result]
    answer.sort((a, b) => a - b)
    return answer;
}