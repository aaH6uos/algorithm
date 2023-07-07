function solution(places) {
    function check (arr) {
        for (let i=0; i<5; i++) {
            for (let j=0; j<5; j++) {
                // 인접한 P가 존재하는 경우 return 0
                if (arr[i][j] == 'P') {
                    if (j < 4 && arr[i][j+1] == 'P') return 0
                    if (i < 4 && arr[i+1][j] == 'P') return 0                    
                }
                // O와 인접한 P가 2개 이상일 때 return 0
                if (arr[i][j] == 'O') {
                    let cnt = 0;
                    if (j < 4 && arr[i][j+1] == 'P') cnt++
                    if (i < 4 && arr[i+1][j] == 'P') {
                        cnt++;
                        if (cnt >= 2) return 0
                    }
                    if (j > 0 && arr[i][j-1] == 'P') {
                        cnt++;
                        if (cnt >= 2) return 0
                    }
                    if (i > 0 && arr[i-1][j] == 'P') {
                        cnt++;
                        if (cnt >= 2) return 0
                    }
                }
            }
        }
        return 1
    }
    return places.map(check)
}