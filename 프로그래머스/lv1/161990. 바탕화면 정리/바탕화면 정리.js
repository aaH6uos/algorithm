function solution(wallpaper) {
    let idx = [], idy = [];
    wallpaper.forEach((row, i) => {
        for (let j in row) {
            if (row[j] == '#') {
                idx.push(i)
                idy.push(j)
            }
        }
    })
    return [Math.min(...idx), Math.min(...idy), Math.max(...idx) + 1, Math.max(...idy) + 1];
}