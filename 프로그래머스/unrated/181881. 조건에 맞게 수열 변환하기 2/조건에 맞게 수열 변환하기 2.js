function solution(arr) {
    var answer = 0;
    while (true) {
        const newArr = arr.map(n => {
            if (n >= 50 && n % 2 == 0) {
                return n / 2
            } else if (n < 50 && n % 2 == 1) {
                return n * 2 + 1
            } else {
                return n
            }
        })
        const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
        if (isEqual(arr, newArr)) {
            break
        } else {
            answer++
            arr = newArr
        }
    }
    return answer;
}