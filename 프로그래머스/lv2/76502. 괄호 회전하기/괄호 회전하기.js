function solution(s) {
    const isCorrect = (str) => {
        const bracketMap = {')': '(', ']': '[', '}': '{'}
        let stack = []
        for (let char of str) {
            if (bracketMap[char] == undefined) {
                stack.push(char)
            } else {
                if (stack.at(-1) == bracketMap[char]) {
                    stack.pop()
                } else {
                    return false
                }
            }
        }
        return !stack.length
    }
    
    let answer = 0;
    for (let i=0; i<s.length; i++) {
        let newStr = [...s.slice(i), ...s.slice(0, i)]
        if (isCorrect(newStr)) answer++
    }
    return answer;
}