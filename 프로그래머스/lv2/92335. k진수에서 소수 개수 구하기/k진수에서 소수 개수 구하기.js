function solution(n, k) {
    const isPrime = (num) => {
        if (num == 1) return false
        for (let i=2; i<=Math.sqrt(num); i++) {
            if (num % i == 0) return false
        }
        return true
    }
    const nums = n.toString(k).split('0').filter(ele => ele)
    const primeNums = nums.filter(num => isPrime(num))
    return primeNums.length;
}