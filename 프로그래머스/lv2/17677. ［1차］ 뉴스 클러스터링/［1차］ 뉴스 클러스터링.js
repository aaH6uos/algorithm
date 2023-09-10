function solution(str1, str2) {
    const getStrArr = (str) => {
        let arr = [];
        for (let i=0; i<str.length-1; i++) {
            let subStr = str.slice(i, i + 2).toUpperCase();
            if (/^[A-Z]*$/.test(subStr)) arr.push(subStr)
        }
        return arr.filter(str => (/^[A-Z]*$/.test(str)))
    };
    const count = (arr) => {
        let countObj = {};
        for (let ele of arr) {
            countObj[ele] ? countObj[ele]++ : countObj[ele] = 1
        }
        return countObj
    };
    
    const similarity = (str1, str2) => {
        const obj1 = count(getStrArr(str1));
        const obj2 = count(getStrArr(str2));
        let union = {};
        let intersection = {};
        Object.entries(obj1)
            .forEach(([key, value]) => {
            if (obj2[key]) {
                intersection[key] = Math.min(value, obj2[key])
                union[key] = Math.max(value, obj2[key])
            } else {
                union[key] = value
            }
        });
        Object.entries(obj2)
            .forEach(([key, value]) => {
            if (!obj1[key]) {
                union[key] = value
            }
        })
        const unionCnt = Object.values(union).length ?
              Object.values(union).reduce((a, b) => a + b, 0) : 0
        const intersectionCnt = Object.values(intersection).length ?
              Object.values(intersection).reduce((a, b) => a + b, 0) : 0
        
        return Math.floor(intersectionCnt / unionCnt * 65536)
    }
    const answer = similarity(str1, str2)
    return isNaN(answer) ? 65536 : answer;
}