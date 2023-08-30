function solution(t, p) {
    const subStr = [];
    const lenT = t.length;
    const lenP = p.length;
    for (let i=0; i<=lenT-lenP; i++) {
        subStr.push(t.slice(i, i + lenP))
    }
    let answer = 0;
    for (let num of subStr) {
        if (num <= p) answer++
    }
    return answer;
}