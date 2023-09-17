function solution(s) {
    const numArr = s.split(' ')
    return Math.min(...numArr) + ' ' + Math.max(...numArr);
}