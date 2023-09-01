function solution(msg) {
    const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    .split("")
                    .reduce((dict, char, idx) => (
                        dict[char] = idx + 1, dict
                    ), {})
    const arr = msg.split("")
    
    let answer = [];
    let idx = 0
    let str = ""
    
    while (arr.length != idx) {
        str = str.concat(arr[idx])
        if (dict[str]) {
            idx++
        } else {
            answer.push(dict[str.slice(0, str.length - 1)])
            dict[str] = Object.keys(dict).length + 1
            str = ''
        }
        if(arr.length == idx){
            answer.push(dict[str])
        }
    }
    
    return answer;
}