function solution(a, b, n) {
    let answer = 0;
    while (n >= a) {
        const get = Math.floor(n / a) * b;
        answer += get;
        n = (n % a) + get;
    }
    return answer;
}