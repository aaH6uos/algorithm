function solution(clothes) {
    let typeCnt = new Map();
    for (let [name, type] of clothes) {
        let cnt = typeCnt.get(type)
        cnt ? typeCnt.set(type, cnt + 1) : typeCnt.set(type, 1)
    }
    
    let answer = 1;
    for (let [type, cnt] of typeCnt) {
        answer *= cnt + 1
    }
    return answer - 1
}