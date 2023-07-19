function solution(participant, completion) {
    const countMap = new Map();
    
    for (let name of participant) {
        let count = countMap.get(name)
        if (!count) {
            countMap.set(name, 1)
        } else {
            countMap.set(name, count + 1)
        }
    }
    
    for (let completed of completion) {
        countMap.set(completed, countMap.get(completed) - 1)
    }
    
    for (let [name, cnt] of countMap) {
        if (cnt > 0) {
            return name
        }
    }
}