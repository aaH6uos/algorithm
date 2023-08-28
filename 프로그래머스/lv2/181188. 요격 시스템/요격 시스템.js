function solution(targets) {
    targets.sort((a, b) => a[1] - b[1])
    let cnt = 0, end = -1;
    for (let [s, e] of targets) {
        if (s >= end) {
            cnt += 1
            end = e
        }
    }
    return cnt
}