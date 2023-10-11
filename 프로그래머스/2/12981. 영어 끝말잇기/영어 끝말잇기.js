function solution(n, words) {
    const dic = {};
    let lastChar = words[0][0]
    let answer = [0, 0];
    words.every((word, idx) => {
        if (word[0] != lastChar) {
            answer = [idx % n + 1, Math.floor(idx / n) + 1]
            return false
        }
        if (dic[word] != undefined) {
            answer = [idx % n + 1, Math.floor(idx / n) + 1]
            return false
        }
        dic[word] = true
        lastChar = word.slice(-1)
        return true
    })
    return answer
}