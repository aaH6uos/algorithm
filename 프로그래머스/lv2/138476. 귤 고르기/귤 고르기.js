function solution(k, tangerine) {
    let cntObj = {};
    for (let size of tangerine) {
        cntObj[size] != undefined ?
            cntObj[size] += 1 : cntObj[size] = 1
    }
    let arr = Object.values(cntObj).sort((a, b) => b - a);
    let cnt = 0;
    for (let i in arr) {
        cnt += arr[i]
        if (cnt >= k) {
            return parseInt(i) + 1
        }
    }
}