function solution(nums) {
    const numCount = new Set(nums).size
    return nums.length / 2 < numCount ? nums.length / 2 : numCount;
}