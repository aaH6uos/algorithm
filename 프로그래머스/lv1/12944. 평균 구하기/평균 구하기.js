function solution(arr) {
    let sum = arr.reduce((acc, val) => val + acc)
    return sum / arr.length;
}