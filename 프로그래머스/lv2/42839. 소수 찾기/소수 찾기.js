function solution(numbers) {
    // 소수 판정기
    const isPrime = (n) => {
        for (let i=2; i<=Math.sqrt(n); i++) {
            if (n % i == 0) return false
        }
        if (n < 2) return false
        return true
    }
    // 재귀함수로 숫자 조합 만들어가며 소수이면 Set에 추가
    let numSet = new Set();
    // 숫자조합 재귀함수
    const combination = (arr, numStr) => {
        for (let i in arr) {
            const temp = [...arr];
            temp.splice(i, 1);
            let newStr = numStr + arr[i]
            if (isPrime(parseInt(newStr))) {
                numSet.add(parseInt(newStr))
            }
            combination(temp, newStr)
        }
    }
    combination(numbers.split(''), '');
    return numSet.size
}