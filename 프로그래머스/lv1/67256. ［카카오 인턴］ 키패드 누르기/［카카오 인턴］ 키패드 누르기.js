function solution(numbers, hand) {
    const index = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        0: [3, 1]
    };
    let left = [3, 0];
    let right = [3, 2];
    let answer = '';
    
    const clickL = (n) => {
        left = index[n]
        return 'L'
    }
    const clickR = (n) => {
        right = index[n]
        return 'R'
    }
    
    const click = (n) => {
        switch (index[n][1]) {
            case 0: 
                return clickL(n)
            case 2:
                return clickR(n)
            case 1:
                let distLeft = Math.abs(index[n][0] - left[0]) + Math.abs(index[n][1] - left[1]);
                let distRight = Math.abs(index[n][0] - right[0]) + Math.abs(index[n][1] - right[1]);
                if (distLeft < distRight) {
                    return clickL(n)
                } else if (distLeft > distRight) {
                    return clickR(n)
                } else if (hand == 'left') {
                    return clickL(n)
                } else {
                    return clickR(n)
                }
        }
    }
    numbers.forEach((n) => {
        answer = answer.concat(click(n))
    })
    return answer;
}