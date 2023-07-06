function solution(s) {
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    arr.forEach((string, number) => {
        s = s.replaceAll(string, number)
    })
    return Number(s);
}