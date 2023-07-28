function solution(progresses, speeds) {
    const workdays = progresses.map((progress, idx) => {
        return Math.ceil((100 - progress) / speeds[idx])
    })
    
    const answer = [];
    let releaseday = workdays[0], cnt = 0;
    workdays.forEach(workday => {
        if (workday <= releaseday) {
            cnt++
        } else {
            answer.push(cnt);
            releaseday = workday;
            cnt = 1;
        }
    })
    answer.push(cnt);
    
    return answer
}