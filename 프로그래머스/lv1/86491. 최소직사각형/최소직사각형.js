function solution(sizes) {
    let short = 0;
    let long = 0;
    for (let size of sizes) {
        if (size[0] > size[1]) {
            if (long < size[0]) long = size[0]
            if (short < size[1]) short = size[1]
        } else {
            if (long < size[1]) long = size[1]
            if (short < size[0]) short = size[0]
        }
    }
    return short * long;
}