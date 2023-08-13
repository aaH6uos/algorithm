function solution(n, arr1, arr2) {
    const binaryArr1 = arr1.map(num=>{
       const binary = num.toString(2)
       return '0'.repeat(n-binary.length).concat(binary)
    })
    const binaryArr2 = arr2.map(num=>{
       const binary = num.toString(2)
       return '0'.repeat(n-binary.length).concat(binary)
    })

    const answer = binaryArr1.map((binary,binaryIdx)=>{
        return binary.split('').map((string,stringIdx)=>{
            return (string | binaryArr2[binaryIdx][stringIdx]) === 1 ? '#' : ' ' 
        }).join('')
    })

    return answer
}