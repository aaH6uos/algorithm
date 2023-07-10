function solution(lottos, win_nums) {
    let match = 0;
    let maybe = 0;
    for (let num of lottos) {
        if (num == 0) {
            maybe ++
        } else if (win_nums.indexOf(num) != -1) {
            match ++
        }
    }
    const rank = (cnt) => cnt > 1 ? 7 - cnt : 6
    return [rank(match + maybe), rank(match)];
}