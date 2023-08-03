function solution(X, Y) {
    let objX = {}, objY = {}
    for (let n of X) {
        objX[n] ? objX[n]++ : objX[n] = 1
    }
    for (let n of Y) {
        objY[n] ? objY[n]++ : objY[n] = 1
    }
    for (let key in objX) {
        if (!objY[key]) {
            delete objX[key]
        }
        if (objY[key] < objX[key]) objX[key] = objY[key]
    }
    if (Object.entries(objX).length == 0) return "-1"
    const arr = Object.entries(objX).sort((a, b) => b[0] - a[0])
    if (arr[0][0] == "0") return "0"
    var answer = '';
    for (let [key, val] of arr) {
        for (let i=0; i<val; i++) {
            answer += key
        }
    }
    return answer;
}