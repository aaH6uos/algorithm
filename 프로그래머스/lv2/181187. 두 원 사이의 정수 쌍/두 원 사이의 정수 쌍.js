function solution(r1, r2) {
    let cnt = 0;
    for (let x=1; x<=r2; x++) {
        const minY = x < r1 ? Math.ceil(Math.sqrt(Math.pow(r1, 2) - Math.pow(x, 2))) : 1
        const maxY = Math.floor(Math.sqrt(Math.pow(r2, 2) - Math.pow(x, 2)))
        cnt += maxY - minY + 1
    }
    cnt = (cnt + (r2 - r1 + 1)) * 4
    return cnt
}