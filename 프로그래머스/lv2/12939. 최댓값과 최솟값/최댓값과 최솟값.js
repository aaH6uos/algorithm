function solution(s) {
    const numArr = s.split(' ').map(str => parseInt(str))
    return Math.min(...numArr) + ' ' + Math.max(...numArr);
}