function solution(s) {
    if (s.length != 4 && s.length != 6) return false
    var strCnt = s.replace(/\d/g,'').length
    return strCnt == 0;
}