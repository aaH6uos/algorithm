function solution(nums) {
    const monMap = new Map();
    for (let monNum of nums) {
        let cnt = monMap.get(monNum)
        cnt ? monMap.set(monNum, cnt + 1) : monMap.set(monNum, 1)
    }
    return nums.length / 2 < monMap.size ? nums.length / 2 : monMap.size;
}