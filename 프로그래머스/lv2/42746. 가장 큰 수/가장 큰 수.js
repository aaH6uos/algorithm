function solution(numbers) {
    const strArr = numbers.map(n => String(n))
    strArr.sort((a, b) => {
        if (a + b < b + a) return 1
        if (a + b > b + a) return -1
        return 0
    })
    return  strArr[0] == 0 ? "0" : strArr.join('');
}