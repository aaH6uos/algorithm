function solution(x) {
    let sum = 0;
    let nbr = x;
    while (nbr > 0) {
        sum += nbr % 10
        nbr = Math.floor(nbr / 10)
    }
    return !(x % sum)
}