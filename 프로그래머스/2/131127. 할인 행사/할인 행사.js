function solution(want, number, discount) {
    
    const wishList = want.reduce((obj, item, idx) => {
        obj[item] = number[idx];
        return obj
    }, {});
    
    let startIdx = 0;
    let stack = [];
    
    discount.forEach((_, idx) => {
        const target = discount.slice(idx, idx + 10)
        const copy = {...wishList}
        
        target.forEach((item, idx) => {
            if (copy[item]) {
                copy[item]--
            }
            if (copy[item] == 0) {
                delete copy[item]
            }
            if (Object.keys(copy).length == 0) {
                startIdx++
            }
        })
    })
    
    return startIdx;
}