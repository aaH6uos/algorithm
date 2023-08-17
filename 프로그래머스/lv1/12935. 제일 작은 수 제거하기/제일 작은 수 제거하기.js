function solution(arr) {
    let minIdx = 0
    for (let i in arr) {
        if (arr[i] < arr[minIdx]) minIdx = i
    }
    arr.length != 1 ? arr.splice(minIdx, 1) : arr = [-1]
    return arr
}