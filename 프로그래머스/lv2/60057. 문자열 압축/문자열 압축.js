function solution(s) {
    let minLen = s.length;
    
    for (let n=1; n<=s.length/2; n++) {
        let strArr = [];
        for (let i=0; i<s.length; i+=n) {
            strArr.push(s.slice(i, i + n));
        }
        
        let string = ''
        let temp = '', cnt = 0;
        for (let str of strArr) {
            if (str == temp) {
                cnt++
            } else {
                string += cnt < 2 ? temp : cnt + temp;
                temp = str;
                cnt = 1
            }
        }
        string += cnt < 2 ? temp : cnt + temp;
        
        if (string.length < minLen) minLen = string.length
    }
    return minLen;
}