function solution(s){
    let idx = 0;
    for (let str of s) {
        str == '(' ? idx++ : idx--
        if (idx < 0) return false
    }
    return idx == 0
}