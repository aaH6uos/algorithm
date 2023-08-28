function solution(foods) {
    let foodArr = foods.map((food, idx) => {
        const cnt = Math.floor(food / 2);
        if (cnt != 0) {
            return String(idx).repeat(cnt)
        } else {
            return ''
        }
    })
    return foodArr.join('') + '0' + foodArr.reverse().join('');
}