function solution(plans) {
    var answer = [];
    let planMap = {}
    
    const convertTime = (str) => {
        let [h, m] = str.split(':').map(Number)
        return h * 60 + m
    }
    
    plans.forEach(plan => {
        plan[1] = convertTime(plan[1])
        plan[2] = Number(plan[2])
        planMap[plan[1]] = [plan[2],plan[0]]
    })
    
    plans.sort((a,b) => a[1] - b[1])
    
    let startTime = plans[0][1]
    let stack = []
    let finish = 0
    while (finish < plans.length) {
        if (stack.length) {
            stack[stack.length - 1][0]--
            if (stack[stack.length - 1][0] == 0) {
                answer.push(stack[stack.length - 1][1])
                stack.pop()
                finish++
            }
        }
        
        if (planMap[startTime]) stack.push(planMap[startTime])
        startTime++
    }

    return answer;
}