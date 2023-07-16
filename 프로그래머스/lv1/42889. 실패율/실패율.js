function solution(N, stages) {
    let clearArr = Array(N).fill(0);
    let failArr = Array(N).fill(0);
    
    stages.forEach((stageNum) => {
        for (let i=0; i < stageNum-1; i++) {
            clearArr[i] += 1
        }
        failArr[stageNum-1] += 1
    })
    let rateArr = clearArr.map((clear, idx) => {
        let rate = failArr[idx] / (clear + failArr[idx])
        return {
            'stage': idx + 1,
            'rate': rate
        }
    })
    .sort((a, b) => b.rate - a.rate)
    .map(obj => obj.stage)
    return rateArr;
}