function solution(keymap, targets) {
    let charMap = {};
    keymap.forEach(map => {
        map.split('').forEach((char, idx) => {
            if (charMap[char] != undefined) {
                charMap[char] = Math.min(charMap[char], idx + 1)
            } else {
                charMap[char] = idx + 1
            }
        })
    })
    const answer = targets.map(str => {
        let cnt = 0;
        for (let char of str) {
            if (charMap[char] != undefined) {
                cnt += charMap[char]
            } else {
                return -1
            }
        }
        return cnt
    })
    return answer
}