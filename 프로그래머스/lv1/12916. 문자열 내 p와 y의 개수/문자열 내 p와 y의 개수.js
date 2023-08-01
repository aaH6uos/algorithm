function solution(s){
    let countP = 0;
    let countY = 0;
    for (let char of s) {
        if (char.toUpperCase() == 'P') countP++
        if (char.toUpperCase() == 'Y') countY++
    }
    return countP == countY
}