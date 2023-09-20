function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    
    return A.reduce((sum, n, i) => sum + (n * B[i]), 0)
}