function solution(elements) {
    let sumArr = [];
    const newArr = [...elements, ...elements]
    for (let n=1; n<=elements.length; n++) {
        elements.forEach((ele, idx) => {
            const subseq = newArr.slice(idx, idx + n)
            sumArr.push(subseq.reduce((sum, num) => sum + num, 0))
        })
    }
    
    const sumSet = new Set(sumArr)
    return [...sumSet].length;
}