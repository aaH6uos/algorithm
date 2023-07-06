function solution(price, money, count) {
    let sum = 0;
    for (let i=1; i<=count; i++) {
        sum += i;
    }
    const change = money - price * sum;
    if (change < 0) {
        return -change
    }
    return 0;
}