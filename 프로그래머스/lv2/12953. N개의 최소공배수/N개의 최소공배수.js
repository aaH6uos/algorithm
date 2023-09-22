function solution(arr) {
    function lcm(m, n) {        
        let gcd;
        for (let i=1; i<=Math.min(n, m); i++) {
            if (n % i == 0 && m % i == 0) {
                gcd = i;
            }
        }
        return m * n / gcd;
    }    
    return arr.reduce((m, n) => lcm(m, n))
}