function solution(topping) {
    const countTop = (arr) => {
        let cnt = 0
        const topExist = new Map()
        return arr.map(top => {
            if (! topExist.has(top)) {
                topExist.set(top, '')
                cnt += 1
            }
            return cnt
        })
    }
    let chul = countTop(topping)
    let bro = countTop(topping.reverse()).reverse()
    let answer = 0
    for (let i=0; i<topping.length; i++) {
        if (chul[i] == bro[i + 1]) answer += 1
    }
    return answer;
}