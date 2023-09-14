function solution(sequence, k) {
    let [start, end] = [0, sequence.length];
    let [left, right] = [0, 0];
    let sum = sequence[0]
    
    while (right < sequence.length) {
        if (sum < k) {
            sum += sequence[++right]
        } else if (sum > k) {
            sum -= sequence[left++]
        } else {
            if (right - left < end - start) {
                [start, end] = [left, right]                
            }
            sum += sequence[++right]
            sum -= sequence[left++]            
        }
    }
    return [start, end];
}