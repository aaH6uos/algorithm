function solution(s, n) {
    var answer = '';
    for (let idx in s) {
        let charCode = s.charCodeAt(idx)
        let startCode = charCode < 97 ? 65 : 97
        let newCharCode = ((charCode + n - startCode) % 26) + startCode
        charCode == 32 ? 
            answer += ' ' : answer += String.fromCharCode(newCharCode)
    }
    return answer;
}